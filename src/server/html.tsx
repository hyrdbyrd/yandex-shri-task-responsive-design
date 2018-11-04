import { platform } from 'os';

type toHtmlFuncArgs = {
    block: string,
    title?: string,
    bundleName?: string,
    platform?: 'desktop' | 'mobile',
    origin?: string
};

export function toHtml({ block, title, bundleName, platform, origin }: toHtmlFuncArgs): string {
    return `
        <!doctype html>
        <html>
            <head>
                <base href="${ origin || '/' }">
                <script defer>window.PLATFORM = '${platform || 'desktop'}';</script>
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
