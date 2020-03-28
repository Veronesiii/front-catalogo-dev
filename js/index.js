$(function (){
    $.ajax({
        type: 'GET',
        url: 'http://localhost:8000/api/devs',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        secure: true,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        cors: true,
        success: function(devs) {
            console.log('deu bom');
            for (let dev of devs){
                $('#devs').append(`<p class="card-text">${dev.name}</p>
                <p class="card-text">${dev.email}</p>
                <p class="card-text">${dev.level}</p>
                <li class="list-group-item">${dev.skill ? devskill : 'nenhuma skill cadastrada'}</li>`);
            }

        }
    });
}) 
