import { Component } from '@angular/core';
import { Member } from '../member.model';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent {

  members: Member[] = [
    new Member("Jiwon", "President", "Duties: ......, Joined Since: 1998", 1),
    new Member("Rebecca", "Vice President", "Duties: ....., Joined Since: 1200", 2),
    new Member("Erin", "Treasury", "Duties: ....., Joined Since: 2009", 3)
  ];
}
