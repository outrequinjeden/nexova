/**
 * Legal identity of the publisher. Left `null` until confirmed — never guess.
 * `pnpm check:launch` fails while any required field is missing, and the legal
 * notice only prints the fields that are set.
 */
export const legalEntity: {
  /** Registered legal name or full name of the sole proprietor. */
  legalName: string | null;
  /** Legal form, e.g. "Raison individuelle", "Sàrl". */
  legalForm: string | null;
  /** Full postal address in Switzerland. */
  address: string | null;
  /** Swiss enterprise ID (IDE/UID), if registered. */
  uid: string | null;
  /** Person responsible for the content. */
  representative: string | null;
} = {
  legalName: null,
  legalForm: null,
  address: null,
  uid: null,
  representative: null,
};
