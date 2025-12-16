/**
 * ============================================================================
 * サイト設定コンソール (Config)
 * ============================================================================
 * サイト内の共通情報（会社概要、メニュー）およびデザインテーマを一元管理します。
 * このファイルを編集するだけで、全ページの表示と配色は自動的に更新されます。
 */

const SiteConfig = {
    // -------------------------------------------------------------------------
    // 1. デザインテーマ設定 (Color Palette)
    // -------------------------------------------------------------------------
    // ここで指定した色がCSS変数としてサイト全体に適用されます。
    theme: {
        "--color-primary": "#6a6a6a",   // メインの文字色
        "--color-secondary": "#9f9f9f", // 枠線やアクセントカラー
        "--color-light": "#f6f6f6",     // 背景色（明るい・コンテンツエリア等）
        "--color-medium": "#c9c9c9",    // 背景色（中間・ヘッダー/フッター等）
        "--color-dark": "#e4e4e4"       // 背景色（濃いめ・グラデーション用）
    },

    // -------------------------------------------------------------------------
    // 2. サイト基本情報
    // -------------------------------------------------------------------------
    meta: {
        title: "www.masamoto.org",
        subTitle: "Liquid Rayout Website Template",
        copyrightYear: new Date().getFullYear()
    },

    // -------------------------------------------------------------------------
    // 3. 会社情報 (Company Profile)
    // -------------------------------------------------------------------------
    company: {
        name: "マサモトドットオーグ",
        englishName: "masamoto.org",
        representative: "masamoto yamashiro",
        postCode: "163-8001",
        address: "東京都新宿区西新宿2丁目8-1",
        tel: "000-000-0000",
        fax: "000-000-0000",
        email: "masamoto@protonmail.com",
        url: "http://www.masamoto.org/",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.492905421906!2d139.68951651525902!3d35.68948628019234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188cd4b71a37a1%3A0x2f37ccbb974b1193!2z44CSMTYwLTAwMjMg5p2x5Lqs6YO95paw5a6_5Yy66KW_5paw5a6_77yS5LiB55uu77yY4oiS77yR!5e0!3m2!1sja!2sjp!4v1603633371906!5m2!1sja!2sjp"
    },

    // -------------------------------------------------------------------------
    // 4. ナビゲーションメニュー設定
    // -------------------------------------------------------------------------
    globalMenu: [
        { label: "新着情報", link: "index.html" },
        { label: "経営理念", link: "philosophy.html" },
        { label: "会社情報", link: "about.html" },
        { label: "お問い合わせ", link: "information.html" }
    ],

    serviceMenu: [
        { label: "Image&Text", link: "image_and_text.html" },
        { label: "Table", link: "table.html" },
        { label: "Background", link: "background.html" },
        { label: "Download", link: "download.html" }
    ],

    referenceMenu: [
        { label: "Reference_a", link: "reference_a.html" },
        { label: "Reference_b", link: "reference_b.html" }
    ],

    // -------------------------------------------------------------------------
    // 5. ソーシャルリンク設定
    // -------------------------------------------------------------------------
    social: {
        facebook: { url: "http://www.facebook.com/share.php?u=http://www.masamoto.org/", label: "Facebook" },
        twitter: { url: "https://twitter.com/intent/tweet?url=http://www.masamoto.org/", label: "Twitter" },
        line: { url: "http://line.me/R/msg/text/?http://www.masamoto.org/", label: "LINE" }
    }
};