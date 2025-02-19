export function windowValue(name: string): undefined | unknown {
    /**
     * Redeclaration of window that is safe for use with Gatsby server-side (webpack) compilation.
     */
    const WINDOW =
        typeof window !== 'undefined'
            ? (window as any)
            : // typeof global !== 'undefined' ? (global as any) :
              undefined;

    return WINDOW?.[name];
}
