class NewsComponent {
  constructor(container, name, handle, text, time) {
    this.container = container;
    this.name = name;
    this.handle = handle;
    this.text = text;
    this.time = time;
  }

  render() {
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

    news.appendChild(header);
    news.appendChild(body);
    news.appendChild(footer);

    if (this.container !== null) {
      this.container.appendChild(news);
    } else {
      console.error("Cannot find container element");
    }
  }
}

const container = document.querySelector(".feed");

const clearContainer = (container) => {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
};

const renderNews = () => {
  clearContainer(container);

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
};

renderNews();
