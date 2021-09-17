import React ,{useState}from 'react';
import { SafeAreaView ,Text,View,Button, ScrollView, Image, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as ImagePicker from 'react-native-image-picker';
import AntDesign from 'react-native-vector-icons/AntDesign';
const p =[]
var isShow = false 

const PhotoDiary =({navigation})=>{


const [photo,setPhoto] = useState([]);

const handleChoosePhoto =()=>{
    const options ={
        noData:true
    };

    ImagePicker.launchImageLibrary(options,res =>{  
        const url =  res.assets[0].uri
        isShow = true
        // console.log(res) 
        // console.log(url)
        p.push(url)
            setPhoto(url)   
         
    })
    
}

const handleCam =()=>{
  const options = {
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  ImagePicker.launchCamera(options, (response) => {
    if (response.error) {
      console.log('LaunchCamera Error: ', response.error);
    }
    else {
      console.log('dsdsds')
      setPhoto(response.uri)  
      
    }
  });

}
   // #9e17f4
   // #EFBBFF
   // white
   // black
    return(
    <View style={{flex:1,
      backgroundColor: '#EFBBFF'}}>
          
             <View style={{ backgroundColor:'#9e17f4', height:100,
             flexDirection:'row',justifyContent:'space-between',
             paddingHorizontal:25,
             marginBottom:18,borderBottomWidth:2,paddingTop:50}}>
               <TouchableOpacity onPress ={()=>{navigation.navigate('My Diary')}}>
               <AntDesign name='home' style={{fontSize:30,color:'white',
               marginTop:3}}/>
               </TouchableOpacity>
              <Text style={{paddingVertical:10,fontWeight:'400',
              fontSize:18,color:'white' }}>Photo Diary</Text>
             </View>
               <TouchableOpacity style={{backgroundColor:'#9e17f4',
               width:350,marginVertical:5,marginHorizontal:20,borderRadius:5}}> 
            <Button 
            color='white'
            title='choose Photo'
               onPress={handleChoosePhoto}
               />
               </TouchableOpacity>
               <TouchableOpacity style={{backgroundColor:'#9e17f4',
               width:350,marginVertical:5,marginHorizontal:20,borderRadius:5}}> 
            <Button 
            color='white'
            title='launce camera'
            onPress={handleCam}
               />
               </TouchableOpacity>
               <ScrollView>
               {p.map((item,index)=>(
               <View style={{paddingHorizontal:30,marginHorizontal:20,
               marginVertical:5,paddingVertical:5}}>
               <Image
               key={index}
               source ={{uri:item}}
              style={{width:300,height:300}}
               />
               </View>
               ))}

               </ScrollView>
          


           </View>
    )
}

export default PhotoDiary ;