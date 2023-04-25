class NewsForm {
  constructor(parentElement, onSubmit) {
    this.parentElement = parentElement;
    this.onSubmit = onSubmit;
    this.render();
  }

  render() {
    const form = document.createElement("form");
    form.className = "make-form";

    // 사용자 이름 입력 부분
    const nameLabel = document.createElement("label");
    nameLabel.htmlFor = "make-name";
    nameLabel.textContent = "";

    const nameInput = document.createElement("input");
    nameInput.name = "make-name";
    nameInput.placeholder = "당신의 이름을 입력해주세요";
    nameInput.type = "text";

    // 글 내용 입력 부분
    const textLabel = document.createElement("label");
    textLabel.htmlFor = "make-text";
    textLabel.textContent = "";

    const textarea = document.createElement("textarea");
    textarea.name = "make-text";
    textarea.placeholder = "당신의 밥풀이를 찾아주세요";

    const div = document.createElement("div");
    div.className = "make-actions";

    const button = document.createElement("button");
    button.className = "make-button";
    button.type = "submit";
    button.textContent = "게시";
    button.addEventListener("click", (event) => {
      event.preventDefault();
      const text = textarea.value;
      const name = nameInput.value; // 이름 입력 값 가져오기
      if (text) {
        this.onSubmit(name, text); // 이름, 내용 전달
        textarea.value = "";
        nameInput.value = ""; // 입력 필드 초기화
      }
    });

    nameLabel.appendChild(nameInput);

    textLabel.appendChild(textarea);

    div.appendChild(button);

    form.appendChild(nameLabel);
    form.appendChild(textLabel);
    form.appendChild(div);

    this.parentElement.appendChild(form);
  }
}

const newsForm = document.querySelector(".make-form-news");

const handleSubmit = (name, text) => {
  // 이름 추가
  const newTweet = {
    name: name, // 이름 할당
    handle: "@newUser001",
    text: text,
    time: "방금",
  };
  newsData.unshift(newTweet);
  renderNews();
};

const formComponent = new NewsForm(newsForm, handleSubmit);
