const fullName = document.querySelector('.name'),
avatar = document.querySelector('.avatar'),
username = document.querySelector('.username'),
bio = document.querySelector('.bio'),
followers = document.querySelector('.followers'),
repositories = document.querySelector('.repositories'),
url = document.querySelector('.url')
input = document.querySelector('input[type=text]')
submit = document.querySelector('input[type=submit]');
console.log(submit)

fetchUser('torvalds')

async function fetchUser(search){
    const user = await fetch(`https://api.github.com/users/${search}`);
    const res = await user.json();
    console.log(res)
    avatar.src = res.avatar_url;
    fullName.innerHTML = res.name || 'No available';
    username.innerHTML = `@${res.login}`;
    bio.innerHTML = res.bio || 'No available';
    followers.innerHTML = res.followers + ' followers' || 'No available';
    repositories.innerHTML = res.public_repos + ' repositories' || 'No available';;
    url.innerHTML = res.html_url;
    url.href = res.html_url;
}

submit.addEventListener('click', () => {
    fetchUser(input.value)
})