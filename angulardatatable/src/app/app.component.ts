import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angulardatatable';
  addrow() //add new function
          {
            $('#datatableexample').DataTable().row.add([
                'jassa', 'jassa@gmail.com', 'jassa.com'
              ]).draw()
          }
          public datas = [
            {name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
            {name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
            {name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
            {name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
        ];
        
        ngOnInit(){
           //datatable added with settings
            setTimeout(()=>{   
                $('#datatableexample').DataTable( {
                  pagingType: 'full_numbers',
                  pageLength: 5,
                  processing: true,
                  lengthMenu : [5, 10, 25]
              } );
              }, 1);
}
}
