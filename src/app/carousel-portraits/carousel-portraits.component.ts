import { Component, OnInit } from '@angular/core';
import { ICarouselConfig, AnimationConfig } from 'angular4-carousel';

@Component({
  selector: 'app-carousel-portraits',
  templateUrl: './carousel-portraits.component.html',
  styleUrls: ['./carousel-portraits.component.css']
})
export class CarouselPortraitsComponent implements OnInit {

  public imageSources: string[] = [
    'assets/portraits/jack-nicholson-portrait-2015.jpg',
    'assets/portraits/billieHoliday.jpg',
    'assets/portraits/morganFreeman.jpg',
    'assets/portraits/jackCharlton.jpg',
    'assets/portraits/marilynMonroe.jpg',
    'assets/portraits/quentinBlake.jpg',
    'assets/portraits/liamCosgrave.jpg',
    'assets/portraits/yuliaTymoshenko.jpg',
    'assets/portraits/albertEinstein.jpg',
    'assets/portraits/noraBarnacle.jpg',
    'assets/portraits/tomCrean.jpg',
    'assets/portraits/alfredHitchcock.jpg',
    'assets/portraits/normanWisdom.jpg',
    'assets/portraits/motherTeresa.jpg',
    'assets/portraits/samuelBeckett1.jpg',
    'assets/portraits/seamusHeaney.jpg',
    'assets/portraits/garretFitzGerald.jpg',
    'assets/portraits/noamChomsky.jpg',
    'assets/portraits/marleneDietrich.jpg',
    'assets/portraits/seamusMallon.jpg',
    'assets/portraits/samuelBeckett2.jpg',
    'assets/portraits/luanParle.jpg',
    'assets/portraits/bbKing.jpg',
    'assets/portraits/eamonDeValera.jpg',
    'assets/portraits/michaelCollins.jpg',
    'assets/portraits/graceKelly.jpg',
    'assets/portraits/nelsonMandela.jpg',
    'assets/portraits/samuelBeckett3.jpg',
    'assets/portraits/joeBiden.jpg',
    'assets/portraits/popeFrancis.jpg',
    'assets/portraits/gayByrne.jpg',
    'assets/portraits/josephineCunningham.jpg',
    'assets/portraits/billOHerlihy.jpg',
    'assets/portraits/edmundHillary.jpg',
    'assets/portraits/seanMacBride.jpg',
    'assets/portraits/joeLynch.jpg',
    'assets/portraits/jamesJoyce.jpg',
    'assets/portraits/michaelDHiggins.jpg',
    'assets/portraits/louisArmstrong.jpg',
    'assets/portraits/salvadorDali.jpg',
    'assets/portraits/louisLeBrocquy.jpg',
    'assets/portraits/wbYeats1.jpg',
    'assets/portraits/edmundHillary2.jpg',
    'assets/portraits/aungSanSuuKyi.jpg',
    'assets/portraits/robertBallagh.jpg',
    'assets/portraits/maryRobinson.jpg',
    'assets/portraits/mahatmaGandhi.jpg',
  ];

  public config: ICarouselConfig = {
    verifyBeforeLoad: true,
    log: false,
    animation: true,
    animationType: AnimationConfig.SLIDE,
    autoplay: true,
    autoplayDelay: 5000,
    stopAutoplayMinWidth: 768
  };




  constructor() { }

  ngOnInit() {
  }

}
