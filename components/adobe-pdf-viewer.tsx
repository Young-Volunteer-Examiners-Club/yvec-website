"use client";

import { useEffect } from "react";

type AdobePdfViewerProps = {
  viewerId: string;
  clientId: string;
  fileUrl: string;
  fileName: string;
};

type AdobePreviewOptions = {
  embedMode: "IN_LINE";
};

type AdobeViewConstructor = new (options: {
  clientId: string;
  divId: string;
}) => {
  previewFile: (
    file: {
      content: { location: { url: string } };
      metaData: { fileName: string };
    },
    options: AdobePreviewOptions,
  ) => void;
};

declare global {
  interface Window {
    AdobeDC?: {
      View: AdobeViewConstructor;
    };
  }
}

export default function AdobePdfViewer({
  viewerId,
  clientId,
  fileUrl,
  fileName,
}: AdobePdfViewerProps) {
  useEffect(() => {
    const renderViewer = () => {
      if (!window.AdobeDC?.View) return;

      const adobeDCView = new window.AdobeDC.View({
        clientId,
        divId: viewerId,
      });

      adobeDCView.previewFile(
        {
          content: { location: { url: fileUrl } },
          metaData: { fileName },
        },
        { embedMode: "IN_LINE" },
      );
    };

    if (window.AdobeDC?.View) {
      renderViewer();
      return;
    }

    document.addEventListener("adobe_dc_view_sdk.ready", renderViewer, {
      once: true,
    });

    return () => {
      document.removeEventListener("adobe_dc_view_sdk.ready", renderViewer);
    };
  }, [clientId, fileName, fileUrl, viewerId]);

  return (
    <div className="pdf-viewer-shell">
      <div id={viewerId} className="pdf-viewer-embed" />
    </div>
  );
}
