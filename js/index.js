$(function (){
    $.ajax({
        type: 'GET',
        url: 'https://127.0.0.0:8000/devs',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function(devs) {
            console.log('deu bom', devs);
            $.each(devs, function(i, dev){
                $devs.append(`<p class="card-text">${dev.nome}</p>
                <p class="card-text">${dev.email}</p>
                <p class="card-text">${dev.level}</p>
                <li class="list-group-item">${dev.skill}</li>`);
            })

        }
    });
}) 
