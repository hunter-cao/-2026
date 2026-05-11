const departureTime = new Date("2026-05-15T07:45:00+08:00").getTime();
const countdown = document.querySelector("#countdown");

function updateCountdown() {
  if (!countdown) return;

  const distance = departureTime - Date.now();
  if (distance <= 0) {
    countdown.textContent = "已到集合时间，请以群内通知为准";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  countdown.textContent = `距集合 ${days} 天 ${hours} 小时 ${minutes} 分`;
}

updateCountdown();
setInterval(updateCountdown, 60 * 1000);

const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".day-panel");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.day;

    tabs.forEach((item) => {
      const isActive = item === tab;
      item.classList.toggle("active", isActive);
      item.setAttribute("aria-selected", String(isActive));
    });

    panels.forEach((panel) => {
      const isActive = panel.id === target;
      panel.classList.toggle("active", isActive);
      panel.hidden = !isActive;
    });
  });
});

const reminderText = [
  "阳朔团建出发提醒：",
  "5月15日（周五）07:45，深圳北站 10B 检票口 / 安检后候车点集合。",
  "请务必带身份证原件，提前完成安检，带好雨具、防晒用品、充电宝和个人药品。",
  "出行期间以微信群、导游和组长通知为准，个人票面信息以 12306 为准。"
].join("\n");

const copyButton = document.querySelector("#copy-reminder");
if (copyButton) {
  copyButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(reminderText);
      copyButton.textContent = "已复制";
      setTimeout(() => {
        copyButton.textContent = "复制提醒";
      }, 1800);
    } catch {
      copyButton.textContent = "复制失败";
      setTimeout(() => {
        copyButton.textContent = "复制提醒";
      }, 1800);
    }
  });
}

const printButton = document.querySelector("#print-page");
if (printButton) {
  printButton.addEventListener("click", () => window.print());
}
