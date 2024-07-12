function likePost(button) {
    let likeCount = button.querySelector('span');
    likeCount.textContent = parseInt(likeCount.textContent) + 1;
}
