import { NgModule } from '@angular/core';
import { MatToolbarModule,
     MatIconModule,
      MatListModule, 
      MatButtonModule,
      MatCardModule
    } from  '@angular/material';
    import { MatInputModule } from '@angular/material/input';
    

@NgModule({
    imports:[
        MatToolbarModule,
         MatIconModule,
          MatListModule, 
          MatButtonModule ,
          MatInputModule,MatCardModule 
    ],
    exports:[
        MatToolbarModule, MatIconModule, MatListModule, MatButtonModule,MatInputModule,MatCardModule
    ]
})
export class MaterialModule{}
