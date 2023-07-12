import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PomodroComponent } from './components/pomodro/pomodro.component';
import { StopwatchComponent } from './components/stopwatch/stopwatch.component';
import { CountdownComponent } from './components/countdown/countdown.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: 'pomodro' , component: PomodroComponent},
  {path: 'countdown', component: CountdownComponent},
  {path: 'stopwatch', component: StopwatchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppRoutingModule { }
