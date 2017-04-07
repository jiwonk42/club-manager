import { Component } from '@angular/core';
import { Member } from '../member.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent {

  constructor(private router: Router){}

  members: Member[] = [
    new Member("Jiwon", "President", "Duties: ......, Joined Since: 1998", 1),
    new Member("Rebecca", "Vice President", "Duties: ....., Joined Since: 1200", 2),
    new Member("Erin", "Treasury", "Duties: ....., Joined Since: 2009", 3)
  ];

  goToProfilePage(clickedMember: Member) {
   this.router.navigate(['members', clickedMember.id]);
 }
}
