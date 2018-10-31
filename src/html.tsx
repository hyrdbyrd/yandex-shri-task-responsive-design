export function toHtml({ block, title }: { block: string, title?: string }): string {
    return `
        <!doctype html>
        <html>
            <head>
                <title>${title ? title : 'Yandex Дом'}</title>
                <meta charset="utf-8">
            </head>
            <body>
                <div class="app">
                    ${block}
                </div>
                <!-- <script src=""></script> -->
            </body>
        </html>
    `;
}
