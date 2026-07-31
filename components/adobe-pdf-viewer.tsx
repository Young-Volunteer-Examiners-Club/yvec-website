"use client";

import { useEffect, useRef, useState } from "react";

type AdobePdfViewerProps = {
  viewerId: string;
  clientId: string;
  fileUrl: string;
  fileName: string;
};

type AdobePreviewOptions = {
  embedMode: "SIZED_CONTAINER";
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
  const [isLoading, setIsLoading] = useState(true);
  const viewerElementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const viewerElement = viewerElementRef.current;

    if (!viewerElement) return;

    let isActive = true;
    let observer: MutationObserver | null = null;
    let readyTimeoutId: number | undefined;

    const markReady = () => {
      if (isActive) {
        setIsLoading(false);
      }
    };

    const renderViewer = () => {
      if (!window.AdobeDC?.View) return;

      viewerElement.innerHTML = "";

      const adobeDCView = new window.AdobeDC.View({
        clientId,
        divId: viewerId,
      });

      adobeDCView.previewFile(
        {
          content: { location: { url: fileUrl } },
          metaData: { fileName },
        },
        { embedMode: "SIZED_CONTAINER" },
      );

      if (viewerElement.children.length > 0) {
        markReady();
        return;
      }

      observer = new MutationObserver(() => {
        if (viewerElement.children.length > 0) {
          markReady();
        }
      });

      observer.observe(viewerElement, {
        childList: true,
        subtree: true,
      });

      readyTimeoutId = window.setTimeout(markReady, 5000);
    };

    setIsLoading(true);

    if (window.AdobeDC?.View) {
      renderViewer();
    } else {
      document.addEventListener("adobe_dc_view_sdk.ready", renderViewer, {
        once: true,
      });
    }

    return () => {
      isActive = false;
      observer?.disconnect();

      if (readyTimeoutId !== undefined) {
        window.clearTimeout(readyTimeoutId);
      }

      document.removeEventListener("adobe_dc_view_sdk.ready", renderViewer);
    };
  }, [clientId, fileName, fileUrl, viewerId]);

  return (
    <div className="pdf-viewer-shell">
      <div className="pdf-viewer-frame">
        <div
          id={viewerId}
          ref={viewerElementRef}
          className="pdf-viewer-embed"
        />
        {isLoading ? (
          <div className="pdf-viewer-loading" aria-live="polite">
            Loading Adobe PDF viewer...
          </div>
        ) : null}
      </div>
    </div>
  );
}
