// 服务器根url
const root = "http://160.238.36.143:3000/v1";
// 请求所有Stage Level目录
const menu = "/content/menu";
// 请求某一单一章节的文字内容
function text(stage, level, chapter) {
    return `/content/text/stage${stage}/level${level}/chapter${chapter}`;
}

export class ApiPrefix {
    root;
    menu;
    text;
}