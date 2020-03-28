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
        cors:true,
        success: function(devs) {
            console.log('deu bom', devs);
            for (let dev of devs){
                $('#devs').append(`
                <div class="col-sm" id="devs">
                <div class="card" style="width: 18rem;">
                    <img src="images/dev-img1.svg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title text-center">Developer</h5>
                        <p class="card-text"><strong>Nome:</strong> ${dev.name}</p>
                        <p class="card-text"><strong>Email:</strong> ${dev.email}</p>
                        <p class="card-text"><strong>Level:</strong> ${dev.level}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <h5 class="card-title text-center">Skill</h5>
                        <li class="list-group-item">${dev.skill ? devskill : 'nenhuma skill cadastrada'}</li>
                    </ul>
                    <div class="card-body text-center">
                        <a href="https://github.com/${dev.github}" target="_blank" class="card-link">
                            <p class="card-text">Github<img src="images/logo-github.svg" width="20" height="30"alt=""></p>
                        </a>
                    </div>
                </div>
            </div>`);
            }
        }
    });
}) 