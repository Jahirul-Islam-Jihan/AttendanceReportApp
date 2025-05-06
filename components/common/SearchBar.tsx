import React, { useState } from "react";
import { View, TextInput, StyleSheet, TextInputProps } from "react-native";

interface SearchBarProps extends TextInputProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  placeholder,
  style,
  ...props
}) => {
  const [query, setQuery] = useState<string>("");

  return (
    <View style={[styles.container]}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={query}
        placeholderTextColor={"black"}
        onChangeText={(text) => {
          setQuery(text);
          onSearch(text);
        }}
        {...props} // Allow extra properties like keyboardType
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 1,
  },
  input: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 10,
    fontSize: 16,
    height: 45,
    width: 180,
    borderWidth:1,
  },
});

export default SearchBar;
