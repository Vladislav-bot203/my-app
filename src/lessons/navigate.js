import react from "react";
import LevelSelect from "./LevelSelect";
import ColorsGame from "./ColorsGame";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function Navigate() {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="LevelSelect"
                component={LevelSelect}
                options={{title: "Выбор сложности"}}
            />
            <Stack.Screen name="ColorsGame"
                component={ColorsGame}
                options={{title: "игруха"}}
            />
        </Stack.Navigator>
    </NavigationContainer>;
}