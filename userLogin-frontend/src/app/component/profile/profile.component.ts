import { Component, OnInit } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  imagePreview!:any
  img1:any
  constructor( private http:HttpClient){

  }
  public isLogged: boolean = false;
  public userName!: Object;
  selectedFile:any;
  ngOnInit(): void {
    var token: any = localStorage.getItem('token');
    if (token) {
      this.isLogged = true;
      console.log(token, 'tokenooooooo');

      var decode: any = jwt_decode(token);
      this.userName = decode.name;
    }
  }
  onImagePicker(event:any){
    this.selectedFile=event.target.files[0]
    console.log(this.selectedFile,'ghjk');
    const reader=new FileReader()
    reader.onload=()=>{
      this.imagePreview=reader.result
    }
    reader.readAsDataURL(this.selectedFile)
    console.log(reader,'readerreaderreader');
    this.img1=reader
    console.log(this.img1,'img');
    
    
    
    console.log(event,'event');
    
  }
  // upload(){
  //   const fd=new FormData();
  //   fd.append('image',this.selectedFile,this.selectedFile.name)
  //   console.log(fd,'fd');
    
    

  // }
}
