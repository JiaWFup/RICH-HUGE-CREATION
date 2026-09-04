const i18n = {
  en: {
    brandShort: "RICH HUGE CREATION",
    navHome: "Home",
    navAbout: "About Us",
    navServices: "Services",
    navContact: "Contact",
    heroKicker: "Hong Kong · International Enterprise",
    heroTitle: "RICH HUGE CREATION LIMITED",
    heroSubtitle: "International Capital · Professional Creation · Enduring Value",
    heroDesc:
      "A leading Hong Kong based enterprise with strong capital foundation and global business network.",
    heroBtn1: "Discover More",
    heroBtn2: "Our Services",
    stat1: "Years of Expertise",
    stat2: "Global Partners",
    stat3: "Capital Operations",
    stat4: "Market Reach",
    aboutKicker: "About the Company",
    aboutTitle: "About Us",
    aboutDesc:
      "RICH HUGE CREATION LIMITED is a Hong Kong-registered enterprise committed to finance, investment, and cross-border growth.",
    infoTitle: "Company Information",
    infoEnNameLabel: "Registered Name (EN)",
    infoZhNameLabel: "Registered Name (ZH)",
    infoRegLabel: "Hong Kong Business Registration No.",
    infoAddressLabel: "Address",
    infoAddress:
      "UNIT 2016, 20/F., HONG KONG PLAZA, 188 CONNAUGHT ROAD WEST, HONG KONG",
    infoEmailLabel: "Email",
    servicesKicker: "What We Do",
    servicesTitle: "Our Services",
    service1Title: "Capital Investment",
    service1Desc: "Strategic asset deployment across international markets.",
    service2Title: "Corporate Advisory",
    service2Desc: "M&A, restructuring, and cross-border transaction advisory.",
    service3Title: "Global Business Development",
    service3Desc: "Scalable international expansion strategies for enterprises.",
    service4Title: "Financial Engineering",
    service4Desc: "Tailored financing structures and project funding solutions.",
    contactKicker: "Get In Touch",
    contactTitle: "Contact Us",
    contactDesc:
      "Contact us for capital cooperation, investment inquiries, or partnership opportunities.",
    contactCompany: "RICH HUGE CREATION LIMITED",
    contactAddress:
      "UNIT 2016, 20/F., HONG KONG PLAZA,<br />188 CONNAUGHT ROAD WEST, HONG KONG",
    contactRegLabel: "Business Registration:",
    contactEmailLabel: "Email:",
    footerCopy: "© 2026 RICH HUGE CREATION LIMITED. All rights reserved.",
    footerReg: "Hong Kong Business Registration No. 74101537",
  },
  zh: {
    brandShort: "富鵬創建",
    navHome: "首頁",
    navAbout: "關於我們",
    navServices: "服務範疇",
    navContact: "聯絡我們",
    heroKicker: "香港 · 國際企業",
    heroTitle: "富鵬創建有限公司",
    heroSubtitle: "國際資本 · 專業創建 · 長遠價值",
    heroDesc:
      "立足香港，面向全球。富鵬創建有限公司以雄厚資本實力及國際網絡，為客戶提供資本運作、戰略投資及跨境業務拓展服務。",
    heroBtn1: "深入了解",
    heroBtn2: "服務範疇",
    stat1: "年行業經驗",
    stat2: "環球合作夥伴",
    stat3: "資本運作規模",
    stat4: "市場覆蓋",
    aboutKicker: "公司簡介",
    aboutTitle: "關於我們",
    aboutDesc:
      "富鵬創建有限公司（RICH HUGE CREATION LIMITED）為香港依法註冊企業，專注於金融投資、資本運作及跨境增長方案。",
    infoTitle: "公司資料",
    infoEnNameLabel: "英文名稱",
    infoZhNameLabel: "中文名稱",
    infoRegLabel: "香港商業登記號碼",
    infoAddressLabel: "公司地址",
    infoAddress: "香港干諾道西188號香港商業中心20樓2016室",
    infoEmailLabel: "電郵",
    servicesKicker: "業務範疇",
    servicesTitle: "服務範疇",
    service1Title: "資本投資",
    service1Desc: "跨越國際市場的戰略性資本配置與資產管理。",
    service2Title: "企業顧問",
    service2Desc: "提供併購、重組及跨境交易的專業顧問服務。",
    service3Title: "環球業務拓展",
    service3Desc: "協助企業以本地化策略拓展國際市場版圖。",
    service4Title: "金融工程",
    service4Desc: "提供度身訂造的融資架構及項目資金方案。",
    contactKicker: "與我們聯絡",
    contactTitle: "聯絡我們",
    contactDesc: "歡迎就資本合作、投資查詢或業務夥伴關係與我們聯絡。",
    contactCompany: "富鵬創建有限公司",
    contactAddress: "香港干諾道西188號香港商業中心20樓2016室",
    contactRegLabel: "商業登記：",
    contactEmailLabel: "電郵：",
    footerCopy: "© 2026 富鵬創建有限公司。版權所有。",
    footerReg: "香港商業登記號碼 74101537",
  },
};

function applyLanguage(lang) {
  const dict = i18n[lang];
  document.documentElement.lang = lang === "zh" ? "zh-Hant-HK" : "en";

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    if (!key || !dict[key]) return;
    node.innerHTML = dict[key];
  });

  document.getElementById("btn-en").classList.toggle("active", lang === "en");
  document.getElementById("btn-zh").classList.toggle("active", lang === "zh");
}

document.getElementById("btn-en").addEventListener("click", () => {
  applyLanguage("en");
});

document.getElementById("btn-zh").addEventListener("click", () => {
  applyLanguage("zh");
});

applyLanguage("en");
