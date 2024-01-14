import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'

export default function Index() {

  useLoad(() => {
    console.log('Page loaded.')
    console.log('process.env.APP', process.env.APP);
  })

  return (
    <View className='index'>
      <Text>Hello world!</Text>
    </View>
  )
}
