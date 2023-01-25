# ScrollReveal

Esse projeto foi construído para testar as possibilidades de trabalhar com a biblioteca [Scroll Reveal](https://scrollrevealjs.org/) que para Angular utilizaremos a documentaão do **ngx-scrollreveal** no link https://tinesoft.github.io/ngx-scrollreveal/home

Para instalá-la basta rodarmos o comando: `npm install --save scrollreveal`

---

No angular.json colocar o código:

```
"scripts": [
  "../node_modules/scrollreveal/dist/scrollreveal.js"
],
```

---

No app.module.ts importe e declare o NgRevealModule:
```
import {NgsRevealModule} from 'ngx-scrollreveal';

@NgModule({
  declarations: [AppComponent, ...],
  imports: [NgsRevealModule],  
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

---

## USO DA BIBLIOTECA

A biblioteca é composta por duas diretivas principais: **ngsReveale** e **ngsRevealSet**.

### Diretiva ngsReveal
Essa diretiva é utilizada para revelar/ocultar *um único elemento DOM* durante a rolagem.
```<div class="item" ngsReveal>..</div>```

Podemos fazer uma configuraão personalizada para a diretiva com um objeto de configuraões. Para configurar melhor podemos verificar o link de customizaão da própria biblioteca: https://scrollrevealjs.org/guide/customization.html


### Diretiva ngsRevealSet
Essa diretiva é utilizada para revelar/ocultar um *conjunto de elementos DOM* durante a rolagem.

