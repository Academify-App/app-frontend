import { SafeAreaView } from 'react-native'
import WalletInfo from '../../../../components/student/WalletInfo'
import WalletActivity from '../../../../components/student/WalletActivity'

const index = () => {
  return (
    <SafeAreaView className="w-full">
      <WalletInfo/>
      <WalletActivity/>
    </SafeAreaView>
  )
}

export default index