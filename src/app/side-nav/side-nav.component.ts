import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
  SideNavItem = [
    {
      title: 'Manage Staff',
      link: 'staff',
    },
    {
      title: 'Manage Universities',
      link: 'university',
    },
    {
      title: 'Manage Students',
      link: 'student',
    },
    {
      title: 'Manage Books',
      link: 'book',
    },
    {
      title: 'Generate Invoice',
      link: 'invoice',
    },
    {
      title: 'Alloted Books',
      link: 'dialog',
    },
    {
      title: 'Check',
      link: 'checkD',
    },
  ]
}
