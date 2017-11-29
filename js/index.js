let showList = data =>{
    let div = document.querySelector('div#place-for-list');
    div.innerHTML = '';
    data.response.length && data.response.forEach( el => {
            div.innerHTML
                += '<div class="row" data-user-id="'
                + el.user_id
                +'">'
                + '<img src="'
                + el.photo
                + '"/>'
                + el.first_name
                + ' '
                + el.last_name
                + '</div>';
        }
    );
    let script = document.querySelector('head').querySelector('script#jsonp-remove');
    script.parentElement.removeChild(script);
    console.log(data.response);
};
;(x=>{
        "use strict";

    let main = event => {
        "use strict";
        document.querySelector('button#get-friends').addEventListener('click',button);
        document.querySelector('div#place-for-list').addEventListener('click',button);
    };

    let button = event => {
        var script = document.createElement('script');
        let item = event.target;
        let data = item.dataset;
        let userId = data.userId || 14032463;
        script.src = 'https://api.vk.com/method/friends.get?user_id='+userId+'&fields=photo,sex,bdate&callback=showList';
        script.id = 'jsonp-remove';
        console.log(script,userId,item);
        document.getElementsByTagName('head')[0].appendChild(script);
    };
    document.addEventListener('DOMContentLoaded',main);
    // https://davids-restaurant.herokuapp.com/menu_items.json
    // https://davids-restaurant.herokuapp.com/categories.json
    // https://davids-restaurant.herokuapp.com/menu_items.json?category=L
}
)();