export function toHtml({ block, title, bundleName }: { block: string, title?: string, bundleName?: string }): string {
    return `
        <!doctype html>
        <html>
            <head>
                <script src="${bundleName || 'bundle'}.js" defer></script>
                <title>${title || 'Yandex Дом'}</title>
                <meta charset="utf-8">
            </head>
            <body>
                <div class="app">${block}</div>
            </body>
        </html>
    `;
}
