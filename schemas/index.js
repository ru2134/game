import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const connect = () => {
  mongoose
    .connect(
      'mongodb+srv://kcart254:998877aa@cluster0.mudsmb3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
      {
        dbName: 'character', // game 데이터베이스명을 사용합니다.
      },
    )
    .then(() => console.log('MongoDB 연결에 성공하였습니다.'))
    .catch((err) => console.log(`MongoDB 연결에 실패하였습니다. ${err}`));
};

mongoose.connection.on('error', (err) => {
  console.error('MongoDB 연결 에러', err);
});

export default connect;
