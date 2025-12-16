document.addEventListener('DOMContentLoaded', () => {
    // 設定ファイルチェック
    if (typeof SiteConfig === 'undefined') {
        console.error("Config file (SiteConfig) is not loaded.");
        return;
    }

    const c = SiteConfig;

    // ------------------------------------------------------------------------
    // 0. テーマカラーの適用 (CSS変数の上書き)
    // ------------------------------------------------------------------------
    if (c.theme) {
        const root = document.documentElement;
        for (const [key, value] of Object.entries(c.theme)) {
            root.style.setProperty(key, value);
        }
    }

    // ------------------------------------------------------------------------
    // 1. ヘッダー情報の生成 (#js-header)
    // ------------------------------------------------------------------------
    const headerEl = document.getElementById('js-header');
    if (headerEl) {
        headerEl.innerHTML = `
            <div class="logo">
                <a href="index.html">
                    <img src="images/logo.png" class="icon logo-icon" alt="${c.company.name} ロゴ">
                </a>
            </div>
            <div class="title-area">
                <h1>
                    <span class="subtitle">${c.meta.subTitle}</span>
                    <a href="index.html">${c.meta.title}</a>
                </h1>
                <address>
                    〒${c.company.postCode}<br>
                    ${c.company.address}<br>
                    <a href="tel:${c.company.tel}">${c.company.tel}</a>
                    <a href="mailto:${c.company.email}">${c.company.email}</a>
                </address>
            </div>
        `;
    }

    // ------------------------------------------------------------------------
    // 2. グローバルナビゲーションの生成 (#js-global-nav)
    // ------------------------------------------------------------------------
    const navEl = document.getElementById('js-global-nav');
    if (navEl) {
        const listItems = c.globalMenu.map(item => 
            `<li><a href="${item.link}">${item.label}</a></li>`
        ).join('');
        navEl.innerHTML = `<ul class="menu">${listItems}</ul>`;
    }

    // ------------------------------------------------------------------------
    // 3. サイドバーの生成 (#js-side-nav)
    // ------------------------------------------------------------------------
    const sideNavEl = document.getElementById('js-side-nav');
    if (sideNavEl) {
        const serviceItems = c.serviceMenu.map(item => 
            `<li><a href="${item.link}">${item.label}</a></li>`
        ).join('');

        const refItems = c.referenceMenu.map(item => 
            `<li><a href="${item.link}">${item.label}</a></li>`
        ).join('');

        const socialHtml = `
            <ul class="social-links">
                <li><a class="facebook" href="${c.social.facebook.url}" onclick="window.open(this.href, 'FBwindow', 'menubar=no,toolbar=no,scrollbars=yes'); return false;">${c.social.facebook.label}</a></li>
                <li><a class="twitter" href="${c.social.twitter.url}">${c.social.twitter.label}</a></li>
                <li><a class="line" href="${c.social.line.url}">${c.social.line.label}</a></li>
            </ul>
        `;

        sideNavEl.innerHTML = `
            <div class="item-1">
                <p class="label"><span>Service</span>業務案内</p>
                <ul>${serviceItems}</ul>
            </div>
            <div class="item-2">
                <p class="label"><span>Reference</span>参考サイト</p>
                <ul>${refItems}</ul>
            </div>
            ${socialHtml}
        `;
    }

    // ------------------------------------------------------------------------
    // 4. 会社概要テーブル (#js-company-table)
    // ------------------------------------------------------------------------
    const companyTableEl = document.getElementById('js-company-table');
    if (companyTableEl) {
        companyTableEl.innerHTML = `
            <table>
                <tr><th>会社名</th><td>${c.company.name}</td></tr>
                <tr><th>英表記</th><td>${c.company.englishName}</td></tr>
                <tr><th>代表者</th><td>${c.company.representative}</td></tr>
                <tr>
                    <th>住所</th>
                    <td>
                        〒${c.company.postCode}<br>
                        ${c.company.address}
                        <div class="gmap">
                            <iframe src="${c.company.mapUrl}" loading="lazy" width="100%" height="auto" frameborder="0" style="border:0" allowfullscreen></iframe>
                        </div>
                    </td>
                </tr>
                <tr><th>TEL</th><td><a href="tel:${c.company.tel}">${c.company.tel}</a></td></tr>
                <tr><th>FAX</th><td>${c.company.fax}</td></tr>
                <tr><th>E-mail</th><td><a href="mailto:${c.company.email}">${c.company.email}</a></td></tr>
                <tr>
                    <th>URL</th>
                    <td>
                        <img alt="QR" class="left" src="images/qr.png">
                        <a href="${c.company.url}" target="_self">${c.company.url}</a>
                        <p>URLを携帯端末に取り込むには、QRコード&reg;が便利です。<small>QRコード&reg;は株式会社デンソーウェーブの登録商標です。</small></p>
                    </td>
                </tr>
            </table>
        `;
    }

    // ------------------------------------------------------------------------
    // 5. 簡易お問い合わせテーブル (#js-contact-table)
    // ------------------------------------------------------------------------
    const contactTableEl = document.getElementById('js-contact-table');
    if (contactTableEl) {
         contactTableEl.innerHTML = `
            <table>
                <tr><th>TEL</th><td><a href="tel:${c.company.tel}">${c.company.tel}</a></td></tr>
                <tr><th>FAX</th><td>${c.company.fax}</td></tr>
                <tr><th>E-mail</th><td><a href="mailto:${c.company.email}">${c.company.email}</a></td></tr>
                <tr>
                    <th>URL</th>
                    <td>
                         <img alt="QR" class="left" src="images/qr.png">
                         <a href="${c.company.url}" target="_self">${c.company.url}</a>
                         <p>URLを携帯端末に取り込むには、QRコード&reg;が便利です。<small>QRコード&reg;は株式会社デンソーウェーブの登録商標です。</small></p>
                    </td>
                </tr>
            </table>
         `;
    }

    // ------------------------------------------------------------------------
    // 6. フッター (#js-footer)
    // ------------------------------------------------------------------------
    const footerEl = document.getElementById('js-footer');
    if (footerEl) {
        footerEl.innerHTML = `
            <a href="index.html" target="_self">
                &copy;<time>${c.meta.copyrightYear}</time> ${c.meta.title}
            </a>
        `;
    }

    // ------------------------------------------------------------------------
    // 7. スライドショー機能
    // ------------------------------------------------------------------------
    const slideshow = document.getElementById("slideshow");
    if (slideshow) {
        const images = slideshow.getElementsByTagName("img");
        if (images.length > 0) {
            let currentIndex = 0;
            function showImage(index) {
                Array.from(images).forEach((img) => img.style.opacity = 0);
                currentIndex = (index + images.length) % images.length;
                images[currentIndex].style.opacity = 1;
            }
            showImage(0);
            setInterval(() => showImage(currentIndex + 1), 5000);
        }
    }
});