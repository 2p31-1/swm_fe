class NewsComponent {
  constructor(container, name, handle, text, time) {
    this.container = container;
    this.name = name;
    this.handle = handle;
    this.text = text;
    this.time = time;
  }

  render() {
    const feed = document.createElement("div");
    feed.classList.add("feed");

    const news = document.createElement("div");
    news.classList.add("news");

    const header = document.createElement("div");
    header.classList.add("news-header");

    const user = document.createElement("div");
    user.classList.add("news-user");

    const name = document.createElement("div");
    name.classList.add("name");
    name.textContent = this.name;

    const handle = document.createElement("div");
    handle.classList.add("handle");
    handle.textContent = this.handle;

    user.appendChild(name);
    user.appendChild(handle);

    header.appendChild(user);

    const body = document.createElement("div");
    body.classList.add("news-body");

    const text = document.createElement("p");
    text.classList.add("news-text");
    text.textContent = this.text;

    body.appendChild(text);

    const footer = document.createElement("div");
    footer.classList.add("news-footer");

    const time = document.createElement("div");
    time.classList.add("news-date");
    time.textContent = this.time;

    const actions = document.createElement("div");
    actions.classList.add("news-actions");

    const likeButton = document.createElement("button");
    likeButton.classList.add("like-button");
    likeButton.textContent = "Like";

    const replyButton = document.createElement("button");
    replyButton.classList.add("reply-button");
    replyButton.textContent = "Reply";

    actions.appendChild(likeButton);
    actions.appendChild(replyButton);

    footer.appendChild(time);
    footer.appendChild(actions);

    feed.appendChild(news);
    news.appendChild(header);
    news.appendChild(body);
    news.appendChild(footer);

    if (this.container !== null) {
      this.container.appendChild(feed);
    } else {
      console.error("Cannot find container element");
    }
  }
}

const container = document.querySelector(".main");

const newsData = [
  {
    name: "밥풀이",
    handle: "@swm_bobpool",
    text: "저랑 같이 서브웨이 샌드위치 먹으러 가실분 구해요!!",
    time: "1h ago",
  },
  {
    name: "홍길동",
    handle: "@hong",
    text: "오늘 점심 메뉴 추천해주세요!",
    time: "2h ago",
  },
  {
    name: "jenny",
    handle: "@jenny",
    text: "점심 먹고 싶은데 배가 너무 부르네요...",
    time: "3h ago",
  },
  {
    name: "마이클",
    handle: "@michael",
    text: "오늘 수업이 너무 힘들었어요...",
    time: "4h ago",
  },
  {
    name: "손흥민",
    handle: "@son",
    text: "경기 기간이 다가오고 있어요!",
    time: "5h ago",
  },
];

for (const data of newsData) {
  const feed = new NewsComponent(
    container,
    data.name,
    data.handle,
    data.text,
    data.time
  );
  feed.render();
}
