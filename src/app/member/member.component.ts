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

  members: Member[];

  goToProfilePage(clickedMember: Member) {
   this.router.navigate(['members', clickedMember.id]);
 }
}
