// IEで動作させる場合は以下も追加
import '@grapecity/activereports/dist/ie-polyfills';
import * as GCAR from '@grapecity/activereports';
import '@grapecity/activereports-localization';
import '@grapecity/activereports/styles/ar-js-viewer.css';

// レポートファイル読込
import './reports/invoice_green_ipa.rdlx-json';
import './fonts/ipag.ttf';

var IPAGothic = {
    name: 'IPAゴシック',
    source: './fonts/ipag.ttf'
};

GCAR.Core.PageReport.LicenseKey = 'GrapeCity-Internal-Use-Only,157643126623474#B0ylDDpGZQdmMR9kdnZ6akNnbDFTN4YzLhtUatl6MIBXStxGZrU4cjJGVZdWc5FzLZdVMz2UW4ElYURETyIVMY3GOvFlVvImRrETd4cDNxclbRFjchJWdaB5Mvd4QyUmToJWdidTdoh7THJES4RlW5cDVvZnYmh6ZqR7RPZGWYpXMBxEMTNkW4ZkVTR6QxMDS5ElMlNUTSZXU7cmMEhUelJDSYV5bJpGdiF6M8F6MNB5a6Rmb4MFcmFnVzM4VMdWe5ZjWQJnZvdnNqJjaXpURZJ5d8plcpxUSOdHR72SRBRkevRjZTV7SiojITJCLicDREhjMDFjI0ICSiwCMxEzM4YDN7MTM0IicfJye&Qf35Vfic4TyckI0IyQiwiIxYFITpEI4J7bwVmUlZXa4NWQiojIOJyebpjIkJHUiwiI6MjMxIDMgAjM4ADMyAjMiojI4J7QiwiIx8CMuAjL7ITMiojIz5GRiwiIQp4QHJiOiEmTDJCLiQzN4MjM6YjMxMDN6cTNxIiOiQWSiwSflNHbhZmOiI7ckJye0ICbuFkI1pjIEJCLi4TPnpEM8UEcvEnQ9FXYU3WcJtWZDBXMGV5NysUcPhmYk5mN8M5a5dWQuV6L0ZUVWxGc9plbGVEaxNjS0dDcwJzQqBjV0RGRPlnNVFUZz2WT7QTW63ma6MVauJmSOdTRrRkbtp4NwQGVXJGOUJXd6wEz4';

var arjsviewer = new GCAR.Viewer.Viewer('#arjsviewer',{language:'ja'});
arjsviewer.availableExports = ['xlsx','html', 'pdf'];

/*エクスポートする際、特定のフォントを登録します
  フォントのないシステムでも正常にエクスポートされます*/
//arjsviewer.registerFont(IPAGothic);
arjsviewer.open('./reports/invoice_green_ipa.rdlx-json');