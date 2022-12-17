class Ingredient {
  constructor(ctx, x, y, width, height) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.img = new Image();
    this.imagesPaths = [
      "./images/pot.png",
      "./images/sarten.png",
      "./images/cebolla_cortada.png",
      "./images/apella.png",
      "./images/paella.png",
      "./images/cociendo.png",
      "./images/mantequilla_cuadrada.png",
      "./images/filetes_cuchillo.png",
      "./images/brocheta_cruda.png",
      "./images/bbq_asiatica.png",
      "./images/leche_caliente.png",
      "./images/hamburguesas_crudas.png",
      "./images/empanar.png",
      "./images/croquetas_pot.png",
      "./images/rallas.png",
      "./images/melon.png",
      "./images/sazonar.png",
      "./images/harina.png",
      "./images/aguado.png",
      "./images/francesa.png",
      "./images/pez_blanco.png",
      "./images/churros.png",
      "./images/primavera.png",
      "./images/bolitas_oreo.png",
      "./images/la_albondiga.png",
      "./images/picando.png",
      "./images/nose.png",
      "./images/mama.png",
      "./images/sushi.png",
      "./images/martillo.png",
      "./images/sushito.png",
      "./images/cociendole.png",
      "./images/rodillo.png",
      "./images/pasta_casera.png",
      "./images/paises.png",
      "./images/tartita.png",
      "./images/masita.png",
      "./images/palomitas.png",
      "./images/pingui.png",
      "./images/salchicha_voladora.png",
      "./images/carita.png",
      "./images/quemando.png",
      "./images/piratas.png",
      "./images/bacon_raro.png",
      "./images/tomate.png",
      "./images/calabacin.png",
      "./images/del_norte.png",
      "./images/derretida.png",
      "./images/tomate8.png",
      "./images/arroz_leche.png",
      "./images/jam.png",
      "./images/picar.png",
      "./images/mano.png",
      "./images/lechuga.png",
      "./images/huevo.png",
      "./images/batir.png",
      "./images/carne_picada.png",
      "./images/warhol.png",
      "./images/vuelta_y_vuelta.png",
      "./images/horno.png",
      "./images/separar.png",
      "./images/decorar.png",
      "./images/flan.png",
      "./images/parmesano.png",
      "./images/churrin.png",
      "./images/deco.png",
      "./images/salmon.png",
      "./images/enfriar.png",
      "./images/derramar.png",
      "./images/decorrr.png",
    ];

    this.randomIndex = Math.floor(Math.random() * this.imagesPaths.length);
    this.img.src = this.imagesPaths[this.randomIndex];

    this.isReady = false;
    this.img.onload = () => {
        this.isReady = true;
        this.height = (this.width * this.img.height) / this.img.width;
    };
  }

  draw() {
    if (this.isReady) {
        this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
  }

  isColliding(ingredient) {
    return (
      this.x < ingredient.x + ingredient.width &&
      this.x + this.size > ingredient.x &&
      this.y < ingredient.y + ingredient.width &&
      this.y + this.size > ingredient.y
    );
  }
}
