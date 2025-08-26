import { Component } from '@angular/core';
import { FooterSection } from '../../model/footer.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  footerData: FooterSection[] = [
    {
      title: 'Product',
      items: [
        { name: 'Overview', url: '/overview' },
        { name: 'Features', url: '/features' },
        { name: 'Solutions', badge: 'New', url: '/solutions' },
        { name: 'Tutorials', url: '/tutorials' },
        { name: 'Pricing', url: '/pricing' },
        { name: 'Releases', url: '/releases' }
      ]
    },
    {
      title: 'Company',
      items: [
        { name: 'About us', url: '/about' },
        { name: 'Careers', url: '/careers' },
        { name: 'Press', url: '/press' },
        { name: 'News', url: '/news' },
        { name: 'Media kit', url: '/media-kit' },
        { name: 'Contact', url: '/contact' }
      ]
    },
    {
      title: 'Resources',
      items: [
        { name: 'Blog', url: '/blog' },
        { name: 'Newsletter', url: '/newsletter' },
        { name: 'Events', url: '/events' },
        { name: 'Help centre', url: '/help' },
        { name: 'Tutorials', url: '/tutorials' },
        { name: 'Support', url: '/support' }
      ]
    },
    {
      title: 'Legal',
      items: [
        { name: 'Terms', url: '/terms' },
        { name: 'Privacy', url: '/privacy' },
        { name: 'Cookies', url: '/cookies' },
        { name: 'Licenses', url: '/licenses' },
        { name: 'Settings', url: '/settings' },
        { name: 'Contact', url: '/contact' }
      ]
    }
  ];
}
