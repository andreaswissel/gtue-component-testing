import { Component } from '@angular/core';
import { AclService } from '../acl.service';
import { AuthService } from '../auth.service';
import { DataAccessService } from '../data-access.service';

@Component({
  selector: 'lego-legacy',
  templateUrl: './legacy.component.html',
  styleUrls: ['./legacy.component.css'],
})
export class LegacyComponent {
  constructor(
    private aclService: AclService,
    private authService: AuthService,
    private dataAccessService: DataAccessService
  ) {}
}
