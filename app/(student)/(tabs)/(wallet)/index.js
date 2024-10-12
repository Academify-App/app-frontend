import { SafeAreaView, ScrollView } from 'react-native'
import WalletInfo from '../../../../components/student/WalletInfo'
import WalletActivity from '../../../../components/student/WalletActivity'

const index = () => {
  return (
    <SafeAreaView className="w-full bg-[#2B145A] pt-10 min-h-screen flex-1">
      <ScrollView>
        <WalletInfo/>
        <WalletActivity/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default index