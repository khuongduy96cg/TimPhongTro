import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { NgxCarouselModule } from 'ngx-carousel';
import { FormWizardModule } from 'angular2-wizard';
import { ImageUploadModule } from "angular2-image-upload";
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import 'hammerjs';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AumindexComponent } from './admin/usermanagement/aumindex/aumindex.component';
import { AumaddComponent } from './admin/usermanagement/aumadd/aumadd.component';
import { RoomComponent } from './room/room.component';
import { CarouselComponent } from './carousel/carousel.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { WizardComponent } from './wizard/wizard.component';
import { PostroomComponent } from './postroom/postroom.component';
import { ImguploaderComponent } from './imguploader/imguploader.component';
import { AprmindexComponent } from './admin/postroommanagement/aprmindex/aprmindex.component';
import { ApmindexComponent } from './admin/provincemanagement/apmindex/apmindex.component';

import {UtilityService} from './_service/utility.service';
import {ProvinceService} from './_service/province.service';
import {DistrictService} from './_service/district.service';
import {WardService} from './_service/ward.service';
import {StreetService} from './_service/street.service';
import {UserService} from './_service/user.service';
import {RoomService} from './_service/room.service';
import {UploadFileService} from './_service/uploadfile.service';
import { ApmaddComponent } from './admin/provincemanagement/apmadd/apmadd.component';
import { AdmindexComponent } from './admin/districtmanagement/admindex/admindex.component';
import { AdmaddComponent } from './admin/districtmanagement/admadd/admadd.component';
import { AwmindexComponent } from './admin/wardmanagement/awmindex/awmindex.component';
import { AwmaddComponent } from './admin/wardmanagement/awmadd/awmadd.component';
import { AsmindexComponent } from './admin/streetmanagement/asmindex/asmindex.component';
import { AsmaddComponent } from './admin/streetmanagement/asmadd/asmadd.component';
import { AnmindexComponent } from './admin/needmanagement/anmindex/anmindex.component';
import { AnmaddComponent } from './admin/needmanagement/anmadd/anmadd.component';
import { AtmindexComponent } from './admin/typemanagement/atmindex/atmindex.component';
import { AtmaddComponent } from './admin/typemanagement/atmadd/atmadd.component';
import { AutmindexComponent } from './admin/utilitymanagement/autmindex/autmindex.component';
import { AutmaddComponent } from './admin/utilitymanagement/autmadd/autmadd.component';
import { ArmindexComponent } from './admin/reportmanagement/armindex/armindex.component';

import {FlashMessagesModule} from 'angular2-flash-messages';
import { ApmupdateComponent } from './admin/provincemanagement/apmupdate/apmupdate.component';
import { AdmupdateComponent } from './admin/districtmanagement/admupdate/admupdate.component';
import { AwmupdateComponent } from './admin/wardmanagement/awmupdate/awmupdate.component';
import { AsmupdateComponent } from './admin/streetmanagement/asmupdate/asmupdate.component';
import { AnmupdateComponent } from './admin/needmanagement/anmupdate/anmupdate.component';
import { AtmupdateComponent } from './admin/typemanagement/atmupdate/atmupdate.component';
import { AutmupdateComponent } from './admin/utilitymanagement/autmupdate/autmupdate.component';
import { AumupdateComponent } from './admin/usermanagement/aumupdate/aumupdate.component';
import { AiindexComponent } from './admin/information/aiindex/aiindex.component';
import { TabbarComponent } from './admin/tabbar/tabbar.component';
import { FeedbackComponent } from './admin/feedback/feedback.component';
import { NavbarhomeComponent } from './navbarhome/navbarhome.component';
import { AmmindexComponent } from './admin/messagemanagement/ammindex/ammindex.component';
import { AmmreplyComponent } from './admin/messagemanagement/ammreply/ammreply.component';

const appRoutes : Routes = [
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path: 'home', component:HomeComponent},
  {path: 'detailroom/:id', component:RoomComponent},
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'a/i/index', component:AiindexComponent},
  {path: 'a/um/index', component:AumindexComponent},
  {path: 'a/prm/index', component:AprmindexComponent},
  {path: 'a/pm/index', component:ApmindexComponent},
  {path: 'a/dm/index', component:AdmindexComponent},
  {path: 'a/wm/index', component:AwmindexComponent},
  {path: 'a/sm/index', component:AsmindexComponent},
  {path: 'a/nm/index', component:AnmindexComponent},
  {path: 'a/tm/index', component:AtmindexComponent},
  {path: 'a/utm/index', component:AutmindexComponent},
  {path: 'a/mm/index', component:AmmindexComponent},
  {path: 'a/rm/index', component:ArmindexComponent},
  {path: 'a/pm/add', component:ApmaddComponent},
  {path: 'a/um/add', component:AumaddComponent},
  {path: 'a/dm/add', component:AdmaddComponent},
  {path: 'a/wm/add', component:AwmaddComponent},
  {path: 'a/sm/add', component:AsmaddComponent},
  {path: 'a/nm/add', component:AnmaddComponent},
  {path: 'a/tm/add', component:AtmaddComponent},
  {path: 'a/utm/add', component:AutmaddComponent},
  {path: 'a/pm/update/:id', component:ApmupdateComponent},
  {path: 'a/dm/update/:id', component:AdmupdateComponent},
  {path: 'a/wm/update/:id', component:AwmupdateComponent},
  {path: 'a/sm/update/:id', component:AsmupdateComponent},
  {path: 'a/nm/update/:id', component:AnmupdateComponent},
  {path: 'a/tm/update/:id', component:AtmupdateComponent},
  {path: 'a/utm/update/:id', component:AutmupdateComponent},
  {path: 'a/um/update/:id', component:AumupdateComponent},
  {path: 'a/prm/fb/:id/:action', component:FeedbackComponent},
  {path: 'a/mm/reply/:id', component:AmmreplyComponent},
  {path: 'carousel', component:CarouselComponent},
  {path: 'wizard', component:WizardComponent},
  {path: 'postroom', component:PostroomComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    AumindexComponent,
    AumaddComponent,
    RoomComponent,
    CarouselComponent,
    LoginComponent,
    RegisterComponent,
    WizardComponent,
    PostroomComponent,
    ImguploaderComponent,
    AprmindexComponent,
    ApmindexComponent,
    ApmaddComponent,
    AdmindexComponent,
    AdmaddComponent,
    AwmindexComponent,
    AwmaddComponent,
    AsmindexComponent,
    AsmaddComponent,
    AnmindexComponent,
    AnmaddComponent,
    AtmindexComponent,
    AtmaddComponent,
    AutmindexComponent,
    AutmaddComponent,
    ArmindexComponent,
    ApmupdateComponent,
    AdmupdateComponent,
    AwmupdateComponent,
    AsmupdateComponent,
    AnmupdateComponent,
    AtmupdateComponent,
    AutmupdateComponent,
    AumupdateComponent,
    AiindexComponent,
    TabbarComponent,
    FeedbackComponent,
    NavbarhomeComponent,
    AmmindexComponent,
    AmmreplyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    NgxCarouselModule,
    FormWizardModule,
    FlashMessagesModule.forRoot(),
    ImageUploadModule.forRoot(),
    NgxPaginationModule
  ],
  providers: [UtilityService,DistrictService,ProvinceService,WardService,StreetService,RoomService,UserService,UploadFileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
