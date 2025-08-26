import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideApollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache, ApolloClientOptions } from '@apollo/client/core';
import { routes } from './app.routes';
import { environment } from './environments/environment';
import { ToastrModule } from 'ngx-toastr';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled'
      })
    ),
    provideHttpClient(),
    {
      provide: provideApollo,
      useFactory: (httpLink: HttpLink): ApolloClientOptions<any> => {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({ uri: environment.graphqlUrl })
        };
      },
      deps: [HttpLink]
    },
    importProvidersFrom(
      ToastrModule.forRoot({
        timeOut: 3000,
        positionClass: 'toast-top-right',
        preventDuplicates: true,
        closeButton: true,
        progressBar: true
      })
    )
  ]
};
