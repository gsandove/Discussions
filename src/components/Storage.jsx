export function initLocalStorage() {
  localStorage.setItem(
    "users",
    JSON.stringify([
      {
        username: "admin",
        email: "admin@admin.com",
      },
    ])
  );
  localStorage.setItem(
    "discussions",
    JSON.stringify([
      {
        id: 1,
        title: "Title Discussion",
        body: "Example Discussion",
        author: "admin",
        created_at: "19/07/2022",
        replies: [
          {
            id: 1,
            author: "admin",
            comment: "Example Reply",
            replies: [
              {
                author: "admin",
                created_at: "19/07/2022",
                comment: "Example reply reply",
              },
            ],
          },
        ],
      },
    ])
  );
}

export function deleteUser() {
  localStorage.removeItem("user");
}

export function getCurrentUser() {
  return JSON.parse(localStorage.getItem("user"));
}

export function getAllDiscussions() {
  return JSON.parse(localStorage.getItem("discussions"));
}

export function setDiscussions(discussions) {
  localStorage.setItem("discussions", JSON.stringify(discussions));
}

export function setDiscussionById(discussion) {
  let discussions = getAllDiscussions();
  discussions.splice(discussion.id - 1, 1, discussion);
  localStorage.setItem("discussions", discussions);
}

export function findDiscussionById(id) {}
