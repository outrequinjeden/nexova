import type { Locale } from "@/i18n/routing";

export interface LegalSection {
  heading: string;
  paragraphs?: string[];
  list?: string[];
}
export interface LegalDoc {
  title: string;
  description: string;
  updatedLabel: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}

const PRIVACY_FR: LegalDoc = {
  title: "Politique de confidentialité",
  description: "Comment Nexova traite les données personnelles collectées via ce site.",
  updatedLabel: "Dernière mise à jour",
  updated: "1er novembre 2026",
  intro:
    "Cette politique explique quelles données personnelles Nexova traite lorsque vous visitez ce site ou nous envoyez une demande, pourquoi, et quels sont vos droits. Elle est rédigée selon la loi fédérale suisse sur la protection des données (LPD) et, pour les personnes situées dans l'UE/EEE, tient compte du RGPD.",
  sections: [
    {
      heading: "1. Responsable du traitement",
      paragraphs: [
        "Le responsable du traitement est Nexova, studio web établi en Suisse (voir les mentions légales pour l'identité complète). Contact pour toute question relative aux données : nexova.website@gmail.com.",
      ],
    },
    {
      heading: "2. Données que nous traitons et pourquoi",
      paragraphs: ["Nous ne traitons que les données nécessaires aux finalités suivantes."],
      list: [
        "Formulaire de contact : nom, entreprise, adresse e-mail ou numéro de téléphone, message et langue du site. Finalité : répondre à votre demande et préparer une éventuelle collaboration.",
        "Journaux techniques : adresse IP, date et heure, pages demandées et type de navigateur sont traités par notre hébergeur pour assurer le fonctionnement et la sécurité du site.",
        "Protection contre les abus : une empreinte irréversible (hachage salé) de votre adresse IP sert à limiter le nombre de messages envoyés. Elle est supprimée automatiquement après 24 heures au plus.",
      ],
    },
    {
      heading: "3. Cookies et suivi",
      paragraphs: [
        "Ce site n'utilise ni outil d'analyse, ni publicité, ni cookie de suivi. Un seul cookie fonctionnel mémorise la langue que vous avez choisie ; il ne contient aucune donnée personnelle. Les polices sont hébergées par le site lui-même : aucune requête n'est envoyée à des services de polices externes.",
      ],
    },
    {
      heading: "4. Prestataires et destinataires",
      paragraphs: [
        "Nous faisons appel à des prestataires techniques qui traitent des données pour notre compte :",
      ],
      list: [
        "Vercel Inc. — hébergement et diffusion du site.",
        "Resend — envoi des e-mails de notification de demandes.",
        "Upstash — stockage sécurisé des demandes reçues, afin qu'aucune demande ne soit perdue en cas de panne d'e-mail.",
      ],
    },
    {
      heading: "5. Transferts à l'étranger",
      paragraphs: [
        "Certains prestataires peuvent traiter des données en dehors de la Suisse, notamment dans l'UE/EEE et aux États-Unis. Dans ce cas, nous veillons à ce qu'un niveau de protection approprié soit garanti, par exemple par une décision d'adéquation ou des clauses contractuelles types.",
      ],
    },
    {
      heading: "6. Durée de conservation",
      paragraphs: [
        "Les demandes reçues via le formulaire sont conservées au maximum 24 mois après le dernier échange, sauf si une relation contractuelle exige une conservation plus longue. Vous pouvez demander leur suppression plus tôt.",
      ],
    },
    {
      heading: "7. Vos droits",
      paragraphs: [
        "Vous pouvez demander l'accès à vos données, leur rectification, leur suppression, la limitation de leur traitement ou la remise de celles-ci dans un format courant, et vous opposer à certains traitements. Écrivez-nous à nexova.website@gmail.com ; nous répondons dans un délai raisonnable, en principe 30 jours.",
        "Vous pouvez aussi vous adresser au Préposé fédéral à la protection des données et à la transparence (PFPDT, edoeb.admin.ch) ou, si vous résidez dans l'UE/EEE, à votre autorité de protection des données.",
      ],
    },
    {
      heading: "8. Sécurité",
      paragraphs: [
        "Nous appliquons des mesures techniques et organisationnelles adaptées : connexion chiffrée (HTTPS), validation des données côté serveur, limitation du débit, accès restreint aux données et conservation limitée. Aucune transmission sur Internet n'est toutefois totalement sûre.",
      ],
    },
    {
      heading: "9. Modifications",
      paragraphs: [
        "Nous pouvons adapter cette politique, par exemple si nos prestataires ou nos pratiques évoluent. La version en vigueur est celle publiée sur cette page, avec sa date de mise à jour.",
      ],
    },
  ],
};

const PRIVACY_DE: LegalDoc = {
  title: "Datenschutzerklärung",
  description: "Wie Nexova die über diese Website erhobenen Personendaten bearbeitet.",
  updatedLabel: "Letzte Aktualisierung",
  updated: "1. November 2026",
  intro:
    "Diese Erklärung zeigt, welche Personendaten Nexova bearbeitet, wenn Sie diese Website besuchen oder uns eine Anfrage senden, wofür wir sie verwenden und welche Rechte Sie haben. Sie folgt dem Schweizer Datenschutzgesetz (DSG) und berücksichtigt für Personen im EU/EWR-Raum die DSGVO.",
  sections: [
    {
      heading: "1. Verantwortliche Stelle",
      paragraphs: [
        "Verantwortlich ist Nexova, ein in der Schweiz ansässiges Webstudio (die vollständigen Angaben finden Sie im Impressum). Kontakt für Datenschutzfragen: nexova.website@gmail.com.",
      ],
    },
    {
      heading: "2. Welche Daten wir bearbeiten und wozu",
      paragraphs: ["Wir bearbeiten nur die Daten, die für die folgenden Zwecke nötig sind."],
      list: [
        "Kontaktformular: Name, Unternehmen, E-Mail-Adresse oder Telefonnummer, Nachricht und Sprache der Website. Zweck: Ihre Anfrage beantworten und eine mögliche Zusammenarbeit vorbereiten.",
        "Technische Protokolle: IP-Adresse, Datum und Uhrzeit, aufgerufene Seiten und Browsertyp werden von unserem Hosting-Anbieter bearbeitet, um Betrieb und Sicherheit der Website zu gewährleisten.",
        "Missbrauchsschutz: Ein nicht umkehrbarer Hashwert (mit Salt) Ihrer IP-Adresse dient dazu, die Zahl der gesendeten Nachrichten zu begrenzen. Er wird spätestens nach 24 Stunden automatisch gelöscht.",
      ],
    },
    {
      heading: "3. Cookies und Tracking",
      paragraphs: [
        "Diese Website verwendet weder Analyse-Tools noch Werbung noch Tracking-Cookies. Ein einziges funktionales Cookie speichert die gewählte Sprache; es enthält keine Personendaten. Schriften werden von der Website selbst ausgeliefert, es erfolgen keine Anfragen an externe Schriftdienste.",
      ],
    },
    {
      heading: "4. Dienstleister und Empfänger",
      paragraphs: ["Wir setzen technische Dienstleister ein, die in unserem Auftrag Daten bearbeiten:"],
      list: [
        "Vercel Inc. — Hosting und Auslieferung der Website.",
        "Resend — Versand der E-Mail-Benachrichtigungen über Anfragen.",
        "Upstash — sichere Speicherung eingegangener Anfragen, damit bei einem E-Mail-Ausfall keine Anfrage verloren geht.",
      ],
    },
    {
      heading: "5. Datenübermittlung ins Ausland",
      paragraphs: [
        "Einige Dienstleister können Daten ausserhalb der Schweiz bearbeiten, insbesondere im EU/EWR-Raum und in den USA. In diesem Fall stellen wir ein angemessenes Schutzniveau sicher, etwa durch einen Angemessenheitsbeschluss oder Standardvertragsklauseln.",
      ],
    },
    {
      heading: "6. Aufbewahrungsdauer",
      paragraphs: [
        "Über das Formular eingegangene Anfragen bewahren wir höchstens 24 Monate nach dem letzten Austausch auf, ausser eine Vertragsbeziehung erfordert eine längere Aufbewahrung. Sie können eine frühere Löschung verlangen.",
      ],
    },
    {
      heading: "7. Ihre Rechte",
      paragraphs: [
        "Sie können Auskunft über Ihre Daten, deren Berichtigung oder Löschung, die Einschränkung der Bearbeitung oder die Herausgabe in einem gängigen Format verlangen und bestimmten Bearbeitungen widersprechen. Schreiben Sie uns an nexova.website@gmail.com; wir antworten innert angemessener Frist, in der Regel 30 Tagen.",
        "Sie können sich ausserdem an den Eidgenössischen Datenschutz- und Öffentlichkeitsbeauftragten (EDÖB, edoeb.admin.ch) oder, falls Sie im EU/EWR-Raum wohnen, an Ihre Datenschutzaufsichtsbehörde wenden.",
      ],
    },
    {
      heading: "8. Sicherheit",
      paragraphs: [
        "Wir treffen angemessene technische und organisatorische Massnahmen: verschlüsselte Verbindung (HTTPS), serverseitige Datenprüfung, Mengenbegrenzung, eingeschränkter Datenzugriff und begrenzte Aufbewahrung. Eine Übertragung über das Internet ist jedoch nie vollständig sicher.",
      ],
    },
    {
      heading: "9. Änderungen",
      paragraphs: [
        "Wir können diese Erklärung anpassen, zum Beispiel wenn sich Dienstleister oder Abläufe ändern. Es gilt die auf dieser Seite veröffentlichte Fassung mit ihrem Aktualisierungsdatum.",
      ],
    },
  ],
};

const PRIVACY_EN: LegalDoc = {
  title: "Privacy policy",
  description: "How Nexova handles the personal data collected through this website.",
  updatedLabel: "Last updated",
  updated: "1 November 2026",
  intro:
    "This policy explains which personal data Nexova processes when you visit this website or send us an enquiry, why, and what rights you have. It follows the Swiss Federal Act on Data Protection (FADP) and, for people in the EU/EEA, takes the GDPR into account.",
  sections: [
    {
      heading: "1. Controller",
      paragraphs: [
        "The controller is Nexova, a web studio established in Switzerland (see the legal notice for full details). Contact for any data question: nexova.website@gmail.com.",
      ],
    },
    {
      heading: "2. Data we process and why",
      paragraphs: ["We only process the data needed for the following purposes."],
      list: [
        "Contact form: name, business, email address or phone number, message and site language. Purpose: answering your enquiry and preparing a possible collaboration.",
        "Technical logs: IP address, date and time, requested pages and browser type are processed by our hosting provider to run and secure the site.",
        "Abuse protection: an irreversible salted hash of your IP address is used to limit how many messages can be sent. It is deleted automatically after 24 hours at most.",
      ],
    },
    {
      heading: "3. Cookies and tracking",
      paragraphs: [
        "This site uses no analytics, no advertising and no tracking cookies. A single functional cookie remembers the language you chose; it contains no personal data. Fonts are served by the site itself, so no requests are made to external font services.",
      ],
    },
    {
      heading: "4. Service providers and recipients",
      paragraphs: ["We use technical providers that process data on our behalf:"],
      list: [
        "Vercel Inc. — hosting and delivery of the website.",
        "Resend — sending the email notifications about enquiries.",
        "Upstash — secure storage of received enquiries, so that none is lost if email delivery fails.",
      ],
    },
    {
      heading: "5. Transfers abroad",
      paragraphs: [
        "Some providers may process data outside Switzerland, notably in the EU/EEA and the United States. In that case we make sure an appropriate level of protection is in place, for example an adequacy decision or standard contractual clauses.",
      ],
    },
    {
      heading: "6. Retention",
      paragraphs: [
        "Enquiries received through the form are kept for at most 24 months after the last exchange, unless a contractual relationship requires longer retention. You can ask for earlier deletion.",
      ],
    },
    {
      heading: "7. Your rights",
      paragraphs: [
        "You may request access to your data, its correction or deletion, restriction of processing, or a copy in a common format, and object to certain processing. Write to nexova.website@gmail.com; we reply within a reasonable time, normally 30 days.",
        "You may also contact the Federal Data Protection and Information Commissioner (FDPIC, edoeb.admin.ch) or, if you live in the EU/EEA, your local data protection authority.",
      ],
    },
    {
      heading: "8. Security",
      paragraphs: [
        "We apply appropriate technical and organisational measures: encrypted connections (HTTPS), server-side validation, rate limiting, restricted access and limited retention. No transmission over the internet is completely secure, however.",
      ],
    },
    {
      heading: "9. Changes",
      paragraphs: [
        "We may update this policy, for example when providers or practices change. The version published on this page, with its update date, applies.",
      ],
    },
  ],
};

const NOTICE_FR: LegalDoc = {
  title: "Mentions légales",
  description: "Informations légales sur l'éditeur du site Nexova.",
  updatedLabel: "Dernière mise à jour",
  updated: "1er novembre 2026",
  intro: "Informations sur l'éditeur de ce site et conditions générales d'utilisation.",
  sections: [
    { heading: "Éditeur", paragraphs: ["__PUBLISHER__"] },
    {
      heading: "Démonstrations conceptuelles",
      paragraphs: [
        "Les projets présentés dans la section « Réalisations » sont des concepts fictifs créés par Nexova pour illustrer son savoir-faire. Ils ne représentent pas des clients réels. Les noms, entreprises et situations qui y figurent sont imaginaires ; toute ressemblance avec des entreprises existantes serait fortuite.",
      ],
    },
    {
      heading: "Propriété intellectuelle",
      paragraphs: [
        "Les textes, le design, le code et les visuels de ce site sont la propriété de Nexova ou utilisés avec autorisation. Toute reproduction ou réutilisation sans accord écrit préalable est interdite.",
      ],
    },
    {
      heading: "Responsabilité",
      paragraphs: [
        "Nous veillons à l'exactitude des informations publiées, sans garantie d'exhaustivité ni d'actualité. Nous déclinons toute responsabilité pour les dommages résultant de l'utilisation du site, dans la mesure permise par la loi. Nous ne contrôlons pas les sites tiers vers lesquels des liens pourraient pointer.",
      ],
    },
    {
      heading: "Protection des données",
      paragraphs: ["Le traitement des données personnelles est décrit dans la politique de confidentialité."],
    },
    {
      heading: "Droit applicable",
      paragraphs: ["Sous réserve des dispositions impératives, le droit suisse est applicable."],
    },
  ],
};

const NOTICE_DE: LegalDoc = {
  title: "Impressum",
  description: "Rechtliche Angaben zum Herausgeber der Website Nexova.",
  updatedLabel: "Letzte Aktualisierung",
  updated: "1. November 2026",
  intro: "Angaben zum Herausgeber dieser Website und Nutzungsbedingungen.",
  sections: [
    { heading: "Herausgeber", paragraphs: ["__PUBLISHER__"] },
    {
      heading: "Konzeptionelle Demonstrationen",
      paragraphs: [
        "Die im Bereich «Projekte» gezeigten Arbeiten sind fiktive Konzepte, die Nexova zur Veranschaulichung seines Könnens erstellt hat. Es handelt sich nicht um reale Kundenprojekte. Namen, Unternehmen und Situationen sind erfunden; Ähnlichkeiten mit bestehenden Unternehmen wären zufällig.",
      ],
    },
    {
      heading: "Geistiges Eigentum",
      paragraphs: [
        "Texte, Design, Code und Bildmaterial dieser Website sind Eigentum von Nexova oder werden mit Erlaubnis verwendet. Jede Vervielfältigung oder Wiederverwendung ohne vorherige schriftliche Zustimmung ist untersagt.",
      ],
    },
    {
      heading: "Haftung",
      paragraphs: [
        "Wir achten auf die Richtigkeit der veröffentlichten Informationen, übernehmen aber keine Gewähr für Vollständigkeit und Aktualität. Soweit gesetzlich zulässig, lehnen wir jede Haftung für Schäden aus der Nutzung der Website ab. Auf Drittseiten, auf die verlinkt werden könnte, haben wir keinen Einfluss.",
      ],
    },
    {
      heading: "Datenschutz",
      paragraphs: ["Die Bearbeitung von Personendaten ist in der Datenschutzerklärung beschrieben."],
    },
    {
      heading: "Anwendbares Recht",
      paragraphs: ["Vorbehältlich zwingender Bestimmungen gilt Schweizer Recht."],
    },
  ],
};

const NOTICE_EN: LegalDoc = {
  title: "Legal notice",
  description: "Legal information about the publisher of the Nexova website.",
  updatedLabel: "Last updated",
  updated: "1 November 2026",
  intro: "Information about the publisher of this website and terms of use.",
  sections: [
    { heading: "Publisher", paragraphs: ["__PUBLISHER__"] },
    {
      heading: "Conceptual demonstrations",
      paragraphs: [
        "The projects shown in the “Selected work” section are fictional concepts created by Nexova to illustrate its craft. They do not represent real clients. Names, businesses and situations are imaginary; any resemblance to existing businesses would be coincidental.",
      ],
    },
    {
      heading: "Intellectual property",
      paragraphs: [
        "The text, design, code and visuals of this website belong to Nexova or are used with permission. Any reproduction or reuse without prior written consent is prohibited.",
      ],
    },
    {
      heading: "Liability",
      paragraphs: [
        "We take care that published information is accurate, without guaranteeing completeness or timeliness. To the extent permitted by law, we accept no liability for damage resulting from use of the website. We do not control third-party sites that may be linked.",
      ],
    },
    {
      heading: "Data protection",
      paragraphs: ["The processing of personal data is described in the privacy policy."],
    },
    {
      heading: "Applicable law",
      paragraphs: ["Subject to mandatory provisions, Swiss law applies."],
    },
  ],
};

export const privacyDocs: Record<Locale, LegalDoc> = { fr: PRIVACY_FR, de: PRIVACY_DE, en: PRIVACY_EN };
export const noticeDocs: Record<Locale, LegalDoc> = { fr: NOTICE_FR, de: NOTICE_DE, en: NOTICE_EN };

export const publisherLabels: Record<Locale, Record<"legalName" | "legalForm" | "address" | "uid" | "representative" | "email", string>> = {
  fr: { legalName: "Raison sociale", legalForm: "Forme juridique", address: "Adresse", uid: "N° IDE", representative: "Responsable du contenu", email: "E-mail" },
  de: { legalName: "Firma", legalForm: "Rechtsform", address: "Adresse", uid: "UID-Nr.", representative: "Inhaltlich verantwortlich", email: "E-Mail" },
  en: { legalName: "Legal name", legalForm: "Legal form", address: "Address", uid: "UID", representative: "Responsible for content", email: "Email" },
};
