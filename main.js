function check(){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const all_usernames = ['ali','zhmdff','violet','vmaen','viasa'];
    const passwords = ['ali123','zhmdff123','violet123','vmaen123','viasa123'];

    if (all_usernames.includes(username)) {
        var user_id = all_usernames.indexOf(username);
        if(password === passwords[user_id]){
            document.getElementById('successAlert').classList.remove('d-none');
            document.getElementById('errorAlert').classList.add('d-none');
        }else{
            document.getElementById('successAlert').classList.add('d-none');
            document.getElementById('errorAlert').classList.remove('d-none');
        }
    } else {
        document.getElementById('successAlert').classList.add('d-none');
        document.getElementById('errorAlert').classList.remove('d-none');
    }
}