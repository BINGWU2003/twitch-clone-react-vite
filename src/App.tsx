/*
 * @Author: BINGWU
 * @Date: 2024-07-25 10:59:43
 * @LastEditors: hujiacheng hujiacheng@iipcloud.com
 * @LastEditTime: 2024-07-25 16:23:05
 * @FilePath: \twitch-clone-react-vite\src\App.tsx
 * @Describe: 
 * @Mark: ૮(˶ᵔ ᵕ ᵔ˶)ა
 */
import { Button } from 'antd';
import { getAllItems } from './apis/item';
function App() {
  const handleGetAllItems = async () => {
    await getAllItems();
  }
  return (
    <>
      <Button type="primary" onClick={handleGetAllItems}>GetItems</Button>
    </>
  )
}

export default App
