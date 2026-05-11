# 公司阳朔团建出行手册

这是一个可直接部署到 GitHub Pages 的静态网站，用于展示 2026 年 5 月 15 日至 17 日公司阳朔团建的集合、交通、行程、安全和物品清单。

## 文件

- `index.html`：页面内容
- `styles.css`：页面样式
- `script.js`：日期切换、倒计时、复制提醒和打印

## 隐私处理

当前版本面向 GitHub Pages 发布，默认不展示订单号、座位号和完整手机号。完整联系方式请保留在公司邮件或微信群中；如果网站只发布在私有仓库或内部网络，可以再把联系人信息替换为完整号码。

## GitHub Pages 发布

建议把当前目录作为独立仓库发布，不要把用户主目录作为仓库推送。

```bash
git init
git add index.html styles.css script.js README.md
git commit -m "Add Yangshuo team trip guide"
git branch -M main
git remote add origin git@github.com:<your-name>/<repo-name>.git
git push -u origin main
```

然后在 GitHub 仓库中进入 `Settings -> Pages`：

1. Source 选择 `Deploy from a branch`
2. Branch 选择 `main`
3. Folder 选择 `/root`
4. 保存后等待 GitHub 生成访问链接

## 信息校对点

- 集合地点目前写为“深圳北站 10B 检票口 / 安检后候车点”，请以最终通知为准。
- 返程按电子票整理为 G2961，14:26 阳朔出发，17:17 抵达深圳北。
- 天气按 2026-05-11 查询的中国天气网 15 天预报整理，出行前一晚建议再次确认。
