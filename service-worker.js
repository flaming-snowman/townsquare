if(!self.define){let e,r={};const n=(n,i)=>(n=new URL(n+".js",i).href,r[n]||new Promise((r=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=r,document.head.appendChild(e)}else e=n,importScripts(n),r()})).then((()=>{let e=r[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,l)=>{const u=e||("document"in self?document.currentScript.src:"")||location.href;if(r[u])return;let o={};const s=e=>n(e,u),a={module:{uri:u},exports:o,require:s};r[u]=Promise.all(i.map((e=>a[e]||s(e)))).then((e=>(l(...e),o)))}}define(["./workbox-6567b62a"],(function(e){"use strict";e.setCacheNameDetails({prefix:"townsquare"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/townsquare/css/app.42f02ae1.css",revision:null},{url:"/townsquare/fonts/papyrus.6c36144c.ttf",revision:null},{url:"/townsquare/fonts/papyrus.7821a699.eot",revision:null},{url:"/townsquare/fonts/papyrus.8f2c38f7.woff2",revision:null},{url:"/townsquare/fonts/papyrus.b94793fb.woff",revision:null},{url:"/townsquare/fonts/piratesbay.c3525999.ttf",revision:null},{url:"/townsquare/img/acrobat.6116faa1.webp",revision:null},{url:"/townsquare/img/alchemist.705c3d50.webp",revision:null},{url:"/townsquare/img/alhadikhia.d7bf92e0.webp",revision:null},{url:"/townsquare/img/alsaahir.741b821d.webp",revision:null},{url:"/townsquare/img/amnesiac.f1cffe0e.webp",revision:null},{url:"/townsquare/img/angel.ecda497b.webp",revision:null},{url:"/townsquare/img/apprentice.b88af5e6.webp",revision:null},{url:"/townsquare/img/artist.6b6b27cd.webp",revision:null},{url:"/townsquare/img/assassin.76617780.webp",revision:null},{url:"/townsquare/img/atheist.62917a90.webp",revision:null},{url:"/townsquare/img/background.268a38a2.jpg",revision:null},{url:"/townsquare/img/balloonist.1f5ec0fd.webp",revision:null},{url:"/townsquare/img/banshee.760e9f5d.webp",revision:null},{url:"/townsquare/img/barber.e9a60cd1.webp",revision:null},{url:"/townsquare/img/barista.15d82f50.webp",revision:null},{url:"/townsquare/img/baron.a8cd32ab.webp",revision:null},{url:"/townsquare/img/beggar.3332d89f.webp",revision:null},{url:"/townsquare/img/bishop.f456afb7.webp",revision:null},{url:"/townsquare/img/bmr.80525f7d.png",revision:null},{url:"/townsquare/img/boffin.34d804ae.webp",revision:null},{url:"/townsquare/img/bonecollector.bce6304d.webp",revision:null},{url:"/townsquare/img/boomdandy.80028006.webp",revision:null},{url:"/townsquare/img/bootlegger.c1d097b7.webp",revision:null},{url:"/townsquare/img/bountyhunter.01fbd545.webp",revision:null},{url:"/townsquare/img/buddhist.375ee863.webp",revision:null},{url:"/townsquare/img/bureaucrat.43b40f7b.webp",revision:null},{url:"/townsquare/img/butcher.d2e531a8.webp",revision:null},{url:"/townsquare/img/butler.6b1d6749.webp",revision:null},{url:"/townsquare/img/cannibal.4abf7ae3.webp",revision:null},{url:"/townsquare/img/cerenovus.206824b4.webp",revision:null},{url:"/townsquare/img/chambermaid.ca908e1b.webp",revision:null},{url:"/townsquare/img/chef.4cab4351.webp",revision:null},{url:"/townsquare/img/choirboy.13c36a6c.webp",revision:null},{url:"/townsquare/img/clock-big.3a6a413c.png",revision:null},{url:"/townsquare/img/clock-small.f6dd3d5b.png",revision:null},{url:"/townsquare/img/clockmaker.742da7c5.webp",revision:null},{url:"/townsquare/img/clouds.a841f758.png",revision:null},{url:"/townsquare/img/courtier.cf85b008.webp",revision:null},{url:"/townsquare/img/cultleader.9c5b71f9.webp",revision:null},{url:"/townsquare/img/custom.1892fe23.png",revision:null},{url:"/townsquare/img/custom.bab0e12b.webp",revision:null},{url:"/townsquare/img/damsel.7ccdf70f.webp",revision:null},{url:"/townsquare/img/death.02491f55.png",revision:null},{url:"/townsquare/img/demon-head.98c86056.png",revision:null},{url:"/townsquare/img/deviant.d1cebae0.webp",revision:null},{url:"/townsquare/img/devilsadvocate.6a8aa011.webp",revision:null},{url:"/townsquare/img/djinn.b0fcd20e.webp",revision:null},{url:"/townsquare/img/doomsayer.df355cb1.webp",revision:null},{url:"/townsquare/img/dreamer.816db9be.webp",revision:null},{url:"/townsquare/img/drunk.4131d995.webp",revision:null},{url:"/townsquare/img/duchess.29f74fa9.webp",revision:null},{url:"/townsquare/img/empath.b5043ae2.webp",revision:null},{url:"/townsquare/img/engineer.b6d7ac53.webp",revision:null},{url:"/townsquare/img/evil.96d2e14b.webp",revision:null},{url:"/townsquare/img/eviltwin.c567148a.webp",revision:null},{url:"/townsquare/img/exorcist.4faa392a.webp",revision:null},{url:"/townsquare/img/fabled.42cb4de1.webp",revision:null},{url:"/townsquare/img/fanggu.2c65282f.webp",revision:null},{url:"/townsquare/img/farmer.0addf8e7.webp",revision:null},{url:"/townsquare/img/fearmonger.cdd68ff1.webp",revision:null},{url:"/townsquare/img/ferryman.087596fb.webp",revision:null},{url:"/townsquare/img/fibbin.fba6ab21.webp",revision:null},{url:"/townsquare/img/fiddler.e129a9cb.webp",revision:null},{url:"/townsquare/img/fisherman.22fcacb5.webp",revision:null},{url:"/townsquare/img/flowergirl.3ad0cdf6.webp",revision:null},{url:"/townsquare/img/fool.27997523.webp",revision:null},{url:"/townsquare/img/fortuneteller.294c8060.webp",revision:null},{url:"/townsquare/img/gambler.0307b853.webp",revision:null},{url:"/townsquare/img/gangster.6b02d07a.webp",revision:null},{url:"/townsquare/img/gardener.6af69fea.webp",revision:null},{url:"/townsquare/img/general.3e226515.webp",revision:null},{url:"/townsquare/img/gnome.b9383f4a.webp",revision:null},{url:"/townsquare/img/goblin.4017d51c.webp",revision:null},{url:"/townsquare/img/godfather.94f997a0.webp",revision:null},{url:"/townsquare/img/golem.c02a3113.webp",revision:null},{url:"/townsquare/img/good.dcedb248.webp",revision:null},{url:"/townsquare/img/goon.4eae261b.webp",revision:null},{url:"/townsquare/img/gossip.7308a29d.webp",revision:null},{url:"/townsquare/img/grandmother.c14d8005.webp",revision:null},{url:"/townsquare/img/gunslinger.22fa23d1.webp",revision:null},{url:"/townsquare/img/harlot.c8394458.webp",revision:null},{url:"/townsquare/img/harpy.d4beb01f.webp",revision:null},{url:"/townsquare/img/hatter.c96e1f17.webp",revision:null},{url:"/townsquare/img/hellslibrarian.0da1cd08.webp",revision:null},{url:"/townsquare/img/heretic.7feb7b0c.webp",revision:null},{url:"/townsquare/img/highpriestess.60f7afdc.webp",revision:null},{url:"/townsquare/img/huntsman.9a431a3a.webp",revision:null},{url:"/townsquare/img/imp.038479d8.webp",revision:null},{url:"/townsquare/img/innkeeper.70fc4f5b.webp",revision:null},{url:"/townsquare/img/investigator.3fd14d1c.webp",revision:null},{url:"/townsquare/img/judge.82f1d6e2.webp",revision:null},{url:"/townsquare/img/juggler.39e61cd3.webp",revision:null},{url:"/townsquare/img/kazali.78040024.webp",revision:null},{url:"/townsquare/img/king.99bd6f3c.webp",revision:null},{url:"/townsquare/img/klutz.8f367622.webp",revision:null},{url:"/townsquare/img/knight.584439d8.webp",revision:null},{url:"/townsquare/img/leaf-left.454b15c5.png",revision:null},{url:"/townsquare/img/leaf-orange.f88192d8.png",revision:null},{url:"/townsquare/img/leaf-right.cad3f525.png",revision:null},{url:"/townsquare/img/leaf-top1.a96ae76e.png",revision:null},{url:"/townsquare/img/leaf-top2.b032a50d.png",revision:null},{url:"/townsquare/img/leaf-top3.d0f3b7e4.png",revision:null},{url:"/townsquare/img/leaf-top4.b60b5f67.png",revision:null},{url:"/townsquare/img/leaf-top5.5b30eda9.png",revision:null},{url:"/townsquare/img/legion.9ca1ae0d.webp",revision:null},{url:"/townsquare/img/leviathan.d89b504f.webp",revision:null},{url:"/townsquare/img/librarian.f72f35b5.webp",revision:null},{url:"/townsquare/img/life.c3464300.png",revision:null},{url:"/townsquare/img/lilmonsta.2855fd85.webp",revision:null},{url:"/townsquare/img/lleech.0ee89bfd.webp",revision:null},{url:"/townsquare/img/lordoftyphon.757e3dc1.webp",revision:null},{url:"/townsquare/img/luf.412493d4.png",revision:null},{url:"/townsquare/img/lunatic.d438d04d.webp",revision:null},{url:"/townsquare/img/lycanthrope.88c5ee41.webp",revision:null},{url:"/townsquare/img/magician.c6d8fbab.webp",revision:null},{url:"/townsquare/img/marionette.c7e25d0f.webp",revision:null},{url:"/townsquare/img/mastermind.787b5a7a.webp",revision:null},{url:"/townsquare/img/mathematician.673ec200.webp",revision:null},{url:"/townsquare/img/matron.6548282f.webp",revision:null},{url:"/townsquare/img/mayor.6362b827.webp",revision:null},{url:"/townsquare/img/mezepheles.213b9107.webp",revision:null},{url:"/townsquare/img/minion.ce560b64.webp",revision:null},{url:"/townsquare/img/minstrel.3fbb35ff.webp",revision:null},{url:"/townsquare/img/monk.95971223.webp",revision:null},{url:"/townsquare/img/moonchild.73a7d4aa.webp",revision:null},{url:"/townsquare/img/mutant.070b70e1.webp",revision:null},{url:"/townsquare/img/nightwatchman.1824ecc9.webp",revision:null},{url:"/townsquare/img/noble.58ca3848.webp",revision:null},{url:"/townsquare/img/nodashii.8c5ad06d.webp",revision:null},{url:"/townsquare/img/ogre.97f32fac.webp",revision:null},{url:"/townsquare/img/ojo.23032d86.webp",revision:null},{url:"/townsquare/img/oracle.7f7a017d.webp",revision:null},{url:"/townsquare/img/organgrinder.a71695b3.webp",revision:null},{url:"/townsquare/img/outsider.62db79ec.webp",revision:null},{url:"/townsquare/img/pacifist.29cff461.webp",revision:null},{url:"/townsquare/img/papyrus.4ee3b046.svg",revision:null},{url:"/townsquare/img/philosopher.943b9a86.webp",revision:null},{url:"/townsquare/img/pithag.6cc03b3c.webp",revision:null},{url:"/townsquare/img/pixie.4b68196f.webp",revision:null},{url:"/townsquare/img/plaguedoctor.89ad3d14.webp",revision:null},{url:"/townsquare/img/plus.401e68cb.png",revision:null},{url:"/townsquare/img/po.c75f0035.webp",revision:null},{url:"/townsquare/img/poisoner.eafa44ed.webp",revision:null},{url:"/townsquare/img/politician.62677ca0.webp",revision:null},{url:"/townsquare/img/poppygrower.34460350.webp",revision:null},{url:"/townsquare/img/preacher.9ded1a3a.webp",revision:null},{url:"/townsquare/img/professor.a8d9cb6e.webp",revision:null},{url:"/townsquare/img/psychopath.e10d3227.webp",revision:null},{url:"/townsquare/img/pukka.ffd9cd17.webp",revision:null},{url:"/townsquare/img/puzzlemaster.16bd7a4c.webp",revision:null},{url:"/townsquare/img/ravenkeeper.b2cf8968.webp",revision:null},{url:"/townsquare/img/recluse.a73faf2c.webp",revision:null},{url:"/townsquare/img/reminder.73529dd8.png",revision:null},{url:"/townsquare/img/revolutionary.cb3931db.webp",revision:null},{url:"/townsquare/img/riot.877a77fe.webp",revision:null},{url:"/townsquare/img/sage.2e7291c1.webp",revision:null},{url:"/townsquare/img/sailor.48f7dbc2.webp",revision:null},{url:"/townsquare/img/saint.96e76d5c.webp",revision:null},{url:"/townsquare/img/savant.50ab69ea.webp",revision:null},{url:"/townsquare/img/scapegoat.487b999c.webp",revision:null},{url:"/townsquare/img/scarletwoman.95a4cb37.webp",revision:null},{url:"/townsquare/img/seamstress.99dc65ac.webp",revision:null},{url:"/townsquare/img/sentinel.d2d1f20e.webp",revision:null},{url:"/townsquare/img/shabaloth.03040301.webp",revision:null},{url:"/townsquare/img/shroud.98e18909.png",revision:null},{url:"/townsquare/img/shugenja.4d9fac15.webp",revision:null},{url:"/townsquare/img/slayer.60475a05.webp",revision:null},{url:"/townsquare/img/snakecharmer.bb18d5ae.webp",revision:null},{url:"/townsquare/img/snitch.7da2d0fd.webp",revision:null},{url:"/townsquare/img/snv.3db30bec.png",revision:null},{url:"/townsquare/img/soldier.12d59454.webp",revision:null},{url:"/townsquare/img/spiritofivory.1fca4452.webp",revision:null},{url:"/townsquare/img/spy.5d257053.webp",revision:null},{url:"/townsquare/img/steward.88683475.webp",revision:null},{url:"/townsquare/img/stormcatcher.18f95791.webp",revision:null},{url:"/townsquare/img/summoner.997c468c.webp",revision:null},{url:"/townsquare/img/sweetheart.880c10eb.webp",revision:null},{url:"/townsquare/img/tb.5d68012d.png",revision:null},{url:"/townsquare/img/tealady.fe893289.webp",revision:null},{url:"/townsquare/img/thief.02be22f1.webp",revision:null},{url:"/townsquare/img/tinker.2f077030.webp",revision:null},{url:"/townsquare/img/token.45e945f3.png",revision:null},{url:"/townsquare/img/towncrier.09ba5f7d.webp",revision:null},{url:"/townsquare/img/toymaker.6ac5d7da.webp",revision:null},{url:"/townsquare/img/undertaker.6ae2dda6.webp",revision:null},{url:"/townsquare/img/vigormortis.2373374e.webp",revision:null},{url:"/townsquare/img/villageidiot.2e468aec.webp",revision:null},{url:"/townsquare/img/virgin.af4b4b83.webp",revision:null},{url:"/townsquare/img/vizier.15aedb49.webp",revision:null},{url:"/townsquare/img/vortox.67f880e5.webp",revision:null},{url:"/townsquare/img/vote.afcd8968.png",revision:null},{url:"/townsquare/img/voudon.c26d7a50.webp",revision:null},{url:"/townsquare/img/washerwoman.771e556c.webp",revision:null},{url:"/townsquare/img/widow.34ae57e8.webp",revision:null},{url:"/townsquare/img/witch.6c9b2b9f.webp",revision:null},{url:"/townsquare/img/x.ac4e061c.png",revision:null},{url:"/townsquare/img/yaggababble.76e2090e.webp",revision:null},{url:"/townsquare/img/zealot.ddff1019.webp",revision:null},{url:"/townsquare/img/zombuul.f55bb4b8.webp",revision:null},{url:"/townsquare/index.html",revision:"5b107fc2278af1ac741933d2471fec96"},{url:"/townsquare/js/app.ce7c02ac.js",revision:null},{url:"/townsquare/js/chunk-vendors.cd7edb7d.js",revision:null},{url:"/townsquare/manifest.json",revision:"9bd3a444a71e6684e5be6f4b46b607af"},{url:"/townsquare/media/countdown.da438d02.mp3",revision:null},{url:"/townsquare/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
