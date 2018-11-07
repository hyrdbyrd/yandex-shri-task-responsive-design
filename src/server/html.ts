type toHtmlFuncArgs = {
    block: string,
    bundleName?: string,
    platform?: 'desktop' | 'mobile',
    origin?: string
};

export function toHtml({ block, bundleName, platform, origin }: toHtmlFuncArgs): string {
    return `
        <!doctype html>
        <html>
            <head>
                <base href="${ origin || '/' }">
                <script defer>
                    window.PLATFORM = '${platform || 'desktop'}';
                </script>
                <script src="${bundleName || 'bundle.js'}" defer></script>
                <title>Yandex Дом</title>
                <meta charset="utf-8">
            </head>
            <body>
                <div class="app">${block}</div>
            </body>
        </html>
    `;
}
