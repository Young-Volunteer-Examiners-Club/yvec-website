import Image from "next/image";
import Script from "next/script";
import AdobePdfViewer from "../components/adobe-pdf-viewer";

export default function Home() {
  return (
    <main className="website-shell">
      <p className="section-title site-title">Young Volunteer Examiners Club</p>
      <h1 className="section-title hero-callsign">WY2VEC</h1>
      <Image
        className="mx-auto hero-logo"
        src="/images/logo.png"
        height={500}
        width={500}
        alt="YVEC Logo"
      />

      <h1 className="section-title">About</h1>
      <p className="infobig">
        Young Volunteer Examiners Club is an unincorporated 501(c)(4)
        nonprofit organization dedicated to advancing amateur radio and
        advocating for the repeal of the minimum age requirement for Volunteer
        Examiners under 47 C.F.R. § 97.509(b)(2).
      </p>

      <p className="info">
        Young Volunteer Examiners Club was created by Jose Moran Urena, KE2IOZ,
        to help push his petition for the repeal of the minimum age requirement
        for Volunteer Examiners. Many petitions like it can take up to a decade
        without any update.
      </p>
      <p className="info">
        <strong>
          We can&apos;t have that.
        </strong>
      </p>
      <p className="info">
        Jose Moran Urena, KE2IOZ, and Ethan Quintero, KE2IEH, have been working
        hard, letting as many people know about this petition, with getting over
        6,700 🤷 views on QRZ and RadioReference combined, and statements from 6
        people so far to submit comments to the FCC supporting the petition.
        This is why we need YOU to join us and spread the word.
      </p>

      <h2 className="heading-2">How YOU Can Help</h2>
      <p className="info">
        If you have a moment, please review the{" "}
        <a
          className="email"
          href="https://www.fcc.gov/ecfs/document/26110070784/1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Petition for Rule Making
        </a>{" "}
        to remove the VE age limit, and consider commenting by using{" "}
        <a
          className="email"
          href="https://docs.google.com/document/d/1wqatZ4jwXIxrrBnnTAKUVZKQdgb0H-bIMbp9TcLDprE/copy?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          this template
        </a>{" "}
        and{" "}
        <a
          className="email"
          href="https://www.fcc.gov/ecfs/filings/standard"
          target="_blank"
          rel="noopener noreferrer"
        >
          uploading it to FCC ECFS
        </a>{" "}
        under INBOX-1.401 as a statement.
      </p>
      <p className="info">
        Any questions on how to fill this out or file it can go to Jose at{" "}
        <a className="email" href="mailto:KE2IOZ@yvec.org">
          KE2IOZ@yvec.org
        </a>
        . An example is available{" "}
        <a
          className="email"
          href="https://www.fcc.gov/ecfs/document/26110010551/1"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        !
      </p>
      <p className="info">
        If you&apos;re a licensed amateur radio operator and meet the Constitution and
        Bylaws guidelines (see below), we invite you to join the Young Volunteer Examiners
        Club. If you&apos;re licensed in the U.S., you may even be authorized to use our
        callsign, WY2VEC, to help advocate for our mission to end the minimum age requirement
        for Volunteer Examiners.
      </p>
      <p className="info">
        To apply, please visit{" "}
        <a className="email" href="https://secure.hamclubonline.com/apply.php" target="_blank" rel="noopener noreferrer">
          HamClubOnline
        </a>{" "}
        and submit your application to our club using our callsign, WY2VEC.
      </p>

      <section>
        <h1 className="section-title">YVEC Board</h1>
        <div className="board-grid">
          <article className="board-card">
            <Image
              className="mx-auto board-image"
              src="/images/KE2IOZ.jpg"
              alt="Jose KE2IOZ"
              width={200}
              height={200}
            />
            <p className="infobig">
              Jose L. <br /> Moran Urena
            </p>
            <p className="infobig">KE2IOZ</p>
            <p className="infobig">President</p>
            <p className="infobig">
              <a className="email" href="mailto:KE2IOZ@yvec.org">
                KE2IOZ@yvec.org
              </a>
            </p>
          </article>

          <article className="board-card">
            <Image
              className="mx-auto board-image"
              src="/images/KE2IEH.jpg"
              alt="Ethan KE2IEH"
              width={200}
              height={200}
            />
            <p className="infobig">
              Ethan J. <br /> Quintero
            </p>
            <p className="infobig">KE2IEH</p>
            <p className="infobig">Vice President</p>
            <p className="infobig">
              <a className="email" href="mailto:KE2IEH@yvec.org">
                KE2IEH@yvec.org
              </a>
            </p>
          </article>

          <article className="board-card">
            <Image
              className="mx-auto board-image"
              src="/images/KD3ATK.png"
              alt="Declan KD3ATK"
              width={200}
              height={200}
            />
            <p className="infobig">
              Declan A. <br /> Zevan
            </p>
            <p className="infobig">KD3ATK</p>
            <p className="infobig">Secretary</p>
            <p className="infobig">
              <a className="email" href="mailto:KD3ATK@yvec.org">
                KD3ATK@yvec.org
              </a>
            </p>
          </article>

          <article className="board-card">
            <Image
              className="mx-auto board-image"
              src="/images/mario.jpg"
              alt="Mario"
              width={200}
              height={200}
            />
            <p className="infobig">
              Mario F. <br /> Alarcón Krause
            </p>
            <p className="infobig">N/A</p>
            <p className="infobig">Treasurer</p>
            <p className="infobig">
              <a className="email" href="mailto:mario@yvec.org">
                mario@yvec.org
              </a>
            </p>
          </article>
        </div>
      </section>

      <section className="documents">
        <Script
          src="https://acrobatservices.adobe.com/view-sdk/viewer.js"
          strategy="afterInteractive"
        />
        <h1 className="section-title">Documents</h1>
        <h2 className="heading-2">Constitution and Bylaws</h2>
        <AdobePdfViewer
          viewerId="constitution-and-bylaws-viewer"
          clientId="0dadd859722e4147861841054f37f23b"
          fileUrl="/files/constitution-and-bylaws.pdf"
          fileName="constitution-and-bylaws.pdf"
        />
        <p className="info">
          If the viewer doesn&apos;t load,{" "}
          <a className="email" href="/files/constitution-and-bylaws.pdf">
            download the Constitution and Bylaws PDF
          </a>
          .
        </p>

        <h2 className="heading-2">The Petition</h2>
        <p className="infobig">
          <a
            className="email"
            href="https://www.fcc.gov/ecfs/search/search-filings/filing/26110070784"
            target="_blank"
            rel="noopener noreferrer"
          >
            The FCC ECFS Filing
          </a>
        </p>
        <AdobePdfViewer
          viewerId="petition-viewer"
          clientId="0dadd859722e4147861841054f37f23b"
          fileUrl="/files/petition.pdf"
          fileName="petition.pdf"
        />
        <p className="info">
          If the viewer doesn&apos;t load,{" "}
          <a className="email" href="/files/petition.pdf">
            download the petition PDF
          </a>
          .
        </p>

        <h2 className="heading-2">FCC Response</h2>
        <AdobePdfViewer
          viewerId="fcc-response-viewer"
          clientId="0dadd859722e4147861841054f37f23b"
          fileUrl="/files/fcc-response.pdf"
          fileName="fcc-response.pdf"
        />
        <p className="info">
          If the viewer doesn&apos;t load,{" "}
          <a className="email" href="/files/fcc-response.pdf">
            download the FCC Response PDF
          </a>
          .
        </p>
      </section>

      <h1 className="section-title">Statements</h1>
      <p className="infobig">
        <a className="email" href="https://www.amateurradioinclusivitypledge.org">
          Proudly Making the Amateur Radio Inclusivity Pledge 
          </a>
        <br> • "Membership may not be denied or terminated because of race, creed, color, religion, gender, sexual orientation, political affiliation, marital status, disability or any other reason that would be biased or prejudicial" - YVEC Constituion and Bylaws</br>
        <br> • We proudly support any and all members of the LGBTQIA+ community, people of color, any and all religions, the disabled, and ohter marginilaized groups!</br>
        <br> • All are welcome. If you think otherwise, you aren't! Bigotry is not allowed and will result in immediate termination! This includes but is not limited to: Racisim, Homophobia, Transphobia, Xenophobia, and Classism.</br>
      </p>
      
      <h1 className="section-title">Contact</h1>
      <p className="infobig">
        Email:{" "}
        <a className="email" href="mailto:board@yvec.org">
          board@yvec.org
        </a>
      </p>
      <p className="infobig">
        Discord:{" "}
        <a className="email" href="https://discord.gg/DTfYHhacTk" target="_blank" rel="noopener noreferrer">
          https://discord.gg/DTfYHhacTk
        </a>
      </p>
    </main>
  );
}
