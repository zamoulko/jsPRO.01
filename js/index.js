let showList = data =>{
    console.log(data,data.length);
    data.response.length && data.response.forEach( el => {
            document.querySelector('div#place-for-list').innerHTML
                += '<div class="row">'
                + '<img src="'
                + el.photo
                + '"/>'
                + el.first_name
                + ' '
                + el.last_name
                + '</div>';
            console.log(el);
        }
    );
};
;(x=>{
        "use strict";

    let main = event => {
        "use strict";
        let url = 'https://api.vk.com/method/friends.get?user_id=36203173&fields=photo?callback=showList';
        console.log('-=*=-');
        document.querySelector('button#get-friends').addEventListener('click',button);
    };

    let button = event => {
        var script = document.createElement('script');
        script.src = 'https://api.vk.com/method/friends.get?user_id=36203173&fields=photo&callback=showList';

        document.getElementsByTagName('head')[0].appendChild(script);
        console.log('+');
    };
    document.addEventListener('DOMContentLoaded',main);
}
)();