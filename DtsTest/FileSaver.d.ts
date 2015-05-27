
/**
 * @summary Interface for "saveAs" function.
 * @author  Cyril Schumacher
 * @version 1.0
 */
interface FileSaver {
    (
        /**
         * @summary Data.
         * @type {Blob}
         */
        data: Blob,

        /**
         * @summary File name.
         * @type {DOMString}
         */
        filename: string
    ): void
}

declare var saveAs: FileSaver;
